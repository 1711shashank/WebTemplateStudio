import classnames from "classnames";
import * as React from "react";

import { FormattedMessage, injectIntl, InjectedIntlProps } from "react-intl";

import CardBody from "../CardBody";

import buttonStyles from "../../css/buttonStyles.module.css";
import styles from "./styles.module.css";
import { IOption } from "../../types/option";
import keyUpHandler from "../../utils/keyUpHandler";
import { getSvg } from "../../utils/getSvgUrl";
import { KEY_EVENTS } from "../../utils/constants";

interface IProps {
  buttonText: string;
  option: IOption;
  handleButtonClick: () => void;
  handleDetailsClick: (detailPageInfo: IOption) => void;
}

type Props = IProps & InjectedIntlProps;

export const Card = ({ option, buttonText, handleButtonClick, handleDetailsClick, intl }: Props) => {
  const formattedBody = option.body as FormattedMessage.MessageDescriptor;
  const formattedTitle = option.title as FormattedMessage.MessageDescriptor;

  const handleDetailsClickIfPressEnterKey = (event: React.KeyboardEvent<HTMLAnchorElement>, option: IOption) => {
    event.stopPropagation();
    if (event.key === KEY_EVENTS.ENTER) {
      handleDetailsClick(option);
    }
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.cardTitleContainer}>
        {getSvg(option.internalName, styles.icon)}
        <div className={styles.cardTitle}>{intl.formatMessage(formattedTitle)}</div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardBody}>
          <CardBody
            formattedBody={formattedBody}
            expectedTime={option.expectedTime as FormattedMessage.MessageDescriptor}
            expectedPrice={option.expectedPrice as FormattedMessage.MessageDescriptor}
          />
        </div>
        <div className={styles.selectionContainer}>
          <a
            onClick={() => handleDetailsClick(option)}
            onKeyPress={event => handleDetailsClickIfPressEnterKey(event, option)}
            className={styles.details}
            tabIndex={0}
            onKeyUp={keyUpHandler}
          >
            <FormattedMessage id="card.details" defaultMessage="Learn more" />
          </a>
          <button
            onClick={handleButtonClick}
            className={classnames(
              styles.signInButton,
              buttonStyles.buttonHighlighted,
              buttonStyles.buttonCursorPointer
            )}
            tabIndex={0}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(Card);
