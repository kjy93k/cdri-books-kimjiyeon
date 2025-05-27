import Button from "@/components/Button";
import Icon from "@/components/Icon";
import InputBarHistory from "@/components/InputBar/InputBarHistory";
import { useSearchHistory } from "@/hooks/useSearchHistory";
import { ComponentBaseProps } from "@/types/component";
import { theme } from "@/styles/theme";
import { css } from "@emotion/react";
import { useSearchBarContext } from "..";

const SearchBarHistory = ({}: ComponentBaseProps) => {
  const { histories, removeHistory } = useSearchHistory();
  const { handleSearch } = useSearchBarContext();
  const { setIsOpen } = useSearchBarContext();

  const handleRemoveHistory = (index: number) => {
    if (histories.length <= 1) setIsOpen(false);
    removeHistory(index);
  };

  return (
    <InputBarHistory>
      <InputBarHistory.List>
        {histories.map((history, index) => {
          return (
            <InputBarHistory.Item key={history}>
              <Button variant="plain" onClick={() => handleSearch(history)}>
                {history}
              </Button>
              <Button
                type="button"
                variant="plain"
                onClick={() => handleRemoveHistory(index)}
              >
                <Icon
                  name={"close"}
                  size={24}
                  css={css`
                    color: ${theme.colors.palette.black};
                  `}
                />
              </Button>
            </InputBarHistory.Item>
          );
        })}
      </InputBarHistory.List>
    </InputBarHistory>
  );
};

export default SearchBarHistory;
