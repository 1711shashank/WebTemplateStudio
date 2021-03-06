import classnames from "classnames";
import * as React from "react";
import { injectIntl, FormattedMessage, InjectedIntl } from "react-intl";


import styles from "./styles.module.css";
import keyUpHandler from "../../utils/keyUpHandler";
import { ARIA_LABELS_NAVIGATION } from "../../utils/constants";

const TopNavBarLink = ({
  pageNumber,
  text,
  visitedCheck,
  path,
  disabled,
  isSelected,
  intl,
  reducerSetPage
}: {
  pageNumber: number;
  text: string;
  visitedCheck: boolean;
  path: string;
  disabled: boolean;
  isSelected: boolean;
  intl: InjectedIntl;
  reducerSetPage: (route: string) => void;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) {
      e.preventDefault();
    }else{
      reducerSetPage(path);
    }
  };



  const getAriaLabel = (
    arialabeltext: FormattedMessage.MessageDescriptor,
    isSelected = false
  ): string => {
    if (isSelected) {
      arialabeltext = ARIA_LABELS_NAVIGATION.ARIA_LABELS_CURRENT_PAGE;
      
    }
    return intl.formatMessage(arialabeltext, {
      pagesText: intl.formatMessage({
        id: "ariaLabelForLink",
        defaultMessage: text
      })
    });
  };

  const linkTabIndex = disabled ? -1 : 0;
  return (
    <a
      tabIndex={linkTabIndex}
      onClick={handleClick}
      className={styles.container}
      onKeyUp={keyUpHandler}
      id={"page" + pageNumber}
      aria-label={
        visitedCheck || isSelected
          ? getAriaLabel(
              ARIA_LABELS_NAVIGATION.ARIA_LABELS_MESSAGES,
              isSelected
            )
          : getAriaLabel(ARIA_LABELS_NAVIGATION.ARIA_LABELS_DISABLED_PAGE)
      }
    >
      <div
        className={classnames(styles.text, {
          [styles.textSelected]: isSelected
        })}
      >
        <div
          className={classnames(styles.pageNumber, {
            [styles.pageIsSelected]: isSelected,
            [styles.pageIsVisited]: visitedCheck
          })}
        >
          {pageNumber}
        </div>
        <div
          className={classnames({
            [styles.pageIsSelectedSmall]: isSelected,
            [styles.pageText]: !isSelected
          })}
        >
          {text}
        </div>
      </div>
    </a>
  );
};

export default injectIntl(TopNavBarLink);
