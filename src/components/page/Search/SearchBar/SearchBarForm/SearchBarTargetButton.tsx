import InputBar from "@/components/InputBar";
import Popup from "@/components/Popup";
import SelectBox from "@/components/SelectBox";
import { BOOK_SEARCH_TARGET_SORT } from "@/constants/book";
import { useSearchHandler } from "@/hooks/useSearchHandler";
import { theme } from "@/styles/theme";
import { pxToRem } from "@/styles/utils/pxToRem";
import { css } from "@emotion/react";
import { useState } from "react";

const SearchBarTargetButton = () => {
  const [searchText, setSearchText] = useState("");
  const [targetValue, setTargetValue] = useState("title");
  const { handleSearch } = useSearchHandler({
    searchText: searchText,
    searchTarget: targetValue,
    onComplete: () => setSearchText(""),
  });

  return (
    <>
      <Popup>
        <Popup.TriggerButton size="sm" fillColor="subtitle" variant="outline">
          상세검색
        </Popup.TriggerButton>
        <Popup.Content>
          <div
            css={css`
              display: flex;
              gap: ${pxToRem(4)};
              margin-bottom: ${pxToRem(16)};
            `}
          >
            <SelectBox
              option={BOOK_SEARCH_TARGET_SORT}
              defaultValue="title"
              onChange={setTargetValue}
            >
              <SelectBox.Title isIcon />
              <SelectBox.Options>
                {BOOK_SEARCH_TARGET_SORT.map(
                  ({ title, value }) =>
                    targetValue !== value && (
                      <SelectBox.Option key={value} title={title} value={value}>
                        {title}
                      </SelectBox.Option>
                    )
                )}
              </SelectBox.Options>
            </SelectBox>
            <InputBar
              css={css`
                width: 100%;
              `}
            >
              <InputBar.Input
                type="text"
                name="search"
                enterKeyHint="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="검색어 입력"
                css={css`
                  height: ${pxToRem(36)};
                  border-bottom: 1px solid ${theme.colors.border.primary};
                  &:focus {
                    border-color: ${theme.colors.palette.primary};
                  }
                `}
                autoComplete="off"
              />
            </InputBar>
          </div>
          <Popup.TriggerButton
            onClick={() => handleSearch()}
            fillColor={"primary"}
            type="button"
            isWide
          >
            검색하기
          </Popup.TriggerButton>
        </Popup.Content>
      </Popup>
    </>
  );
};

export default SearchBarTargetButton;
