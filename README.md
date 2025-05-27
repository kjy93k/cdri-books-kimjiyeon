# CDRI 과제 - 김지연, Frontend

카카오 도서 검색 API를 기반으로 구현한 검색형 인터페이스.
도서 검색, 검색 히스토리 저장, 무한스크롤, 상세검색 기능, 찜하기 기능 등을 제공합니다.

## 프로젝트 개요

- 도서 검색 결과를 무한스크롤로 제공합니다.
- 전체검색과 상세검색(제목, 저자, 출판사), 검색 히스토리를 제공합니다.
- 검색 히스토리는 중복 제거 및 최신순 정렬로 구성되며, 최대 8개까지 저장됩니다.
- 사용자가 찜한 도서를 로컬에 저장하고, 내가 찜한 책 페이지(/favorites)에서 확인할 수 있도록 구현했습니다.

```
git clone https://github.com/kjy93k/cdri-books-kimjiyeon.git
cd cdri-books-kimjiyeon
yarn install
yarn dev
```

## .env 파일에 아래 환경 변수 설정:

```
KAKAO_REST_API_KEY=your-kakao-api-key
```


## 폴더구조
```
components/                  # Compound Pattern + Headless Component로 구현
  ├── Button/
  ├── InputBar/
  ├── SelectBox/
  ├── BookList/
  ├──  ...      
  └── page/                  # page-level 컴포넌트
      ├── Search/
      ├── SearchBar/
      └── Common/            # 공통으로 재사용되는 조합된 컴포넌트

hooks/
  ├── useSearchHandler.ts    # 도서 검색 핸들러
  ├── useSearchBooks.ts      # react-query infinite scroll
  ├── useSearchHistory.ts    # 검색 히스토리 조회, 저장, 삭제
  └── ...

pages/
  └── api/book.ts            # Kakao API 요청

stores/
  ├── useFavoriteStore.ts    # 찜한 도서 상태 관리 zustand + persist
  └── useSearchStore.ts      # 검색 히스토리 상태 관리 zustand + persist

lib/
  ├── priceFormat.ts
  ├── decodeText.ts                  
  └── api/book.ts            # Kakao API 클라이언트 함수
```

## 주요 코드

### useSearchHandler - 도서 검색 시 사용

```ts
interface UseSearchHandlerOptions {
  searchText: string;
  searchTarget?: string;
  onComplete?: () => void;
}

export const useSearchHandler = ({
  searchText,
  searchTarget,
  onComplete,
}: UseSearchHandlerOptions) => {
  const router = useRouter();
  const { addHistory } = useSearchHistory();

  const handleSearch = (keywordOverride?: string) => {
    const keyword = (keywordOverride ?? searchText).trim();
    if (!keyword) return;

    addHistory(keyword);
    router.replace({
      pathname: "/",
      query: {
        search: keyword,
        ...(searchTarget && { target: searchTarget }),
      },
    });

    onComplete?.();
  };

  return { handleSearch };
};

```
- 검색 시 히스토리에 검색어를 저장
- URL에 검색어 반영 및 searchTarget이 있을 경우에만 쿼리에 target 추가
- 콜백함수가 있을 경우에만 onComplete실행

### useSearchBooks - 무한스크롤 도서 조회 및 캐싱

```ts
export const useSearchBooks = (params: BookSearchParams) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["books", params],
    queryFn: ({ pageParam = 1 }) => getBooks({ ...params, page: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.meta.is_end ? undefined : allPages?.length + 1;
    },
    initialPageParam: 1,
    enabled: !!params,
  });
  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  };
};

```
- queryKey
	-	동일한 params 조합일 경우 결과를 캐싱해서 API 재호출 방지
	-	params가 바뀌면 자동으로 refetch
- queryFn
	-	호출할 함수: getBooks({ ...params, page })
	-	현재 페이지 번호를 pageParam으로 받아 API에 전달
	-	pageParam은 내부적으로 getNextPageParam에 의해 관리됨
- getNextPageParam
	-	마지막 페이지의 is_end가 true이면 더 이상 호출하지 않음
	-	아니면 다음 페이지 번호를 allPages.length + 1로 계산해 전달
- enabled: !!params
	-	params가 존재할 때만 쿼리 활성화
	-	비어있을 경우 자동 비활성화 (불필요한 호출 방지)

### useClickOutside - 외부 클릭 시 닫힘 처리

```ts
import { useEffect } from "react";

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  handler: (event: MouseEvent) => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler(event);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler, ref]);

  return ref;
}

```

- Popup, SelectBox, Input History 등 외부 요소 클릭 시 닫힘 처리가 되어야하는 부분에서 쓰임

## 주요 라이브러리

- next, react, 
- zustand, @tanstack/react-query, axios
- @emotion/react, @emotion/styled, emotion-reset, svgr, entities

### Why?

- Zustand + persist
  검색 기록을 브라우저에 저장하고, 상태와 로직을 분리하여 관리하기 위함
- TanStack React Query
  무한스크롤 구현 시 페이지네이션 상태 및 캐싱 자동화
- Emotion
  emotion/styled, emotion/react 통한 props기반 스타일링 작업
- SVGR
  SVG를 React 컴포넌트로 간편하게 불러오기 위해 사용
-	entities
  도서검색 API 응답 텍스트를 디코딩하기 위해 사용

## 구현 포인트

-	무한 스크롤
  React Query의 useInfiniteQuery + IntersectionObserver 조합으로 10개씩 로드
-	공통 컴포넌트 구성
  가장 작은 컴포넌트 단위는 /components/, 페이지 단위는 /components/page/, 공통 영역은     /components/page/Common에 위치
-	스타일 설계
  theme, emotion-rgba, pxToRem을 통해 스타일을 일관성있게 사용
- Kakao API 서버 라우팅
API 키를 클라이언트에 노출하지 않기 위해 Next.js API 라우트 사용

