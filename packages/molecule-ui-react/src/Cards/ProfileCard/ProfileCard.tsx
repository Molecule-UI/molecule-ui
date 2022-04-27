import React from "react";
import cx from "classnames";
import Styles from "./Style/ProfileCardStyle";
import { CSSProperties } from "react";

export interface ProfileCardRootProps {
  src: string;
  title: string;
  className?: string;
  type?: "covered" | "spaced";
  icon?: React.ReactElement;
  onIconClick?: Function;
  style?: CSSProperties;
}

interface ProfileCardImageProps {
  src: string;
  type?: "covered" | "spaced";
}

interface ProfileCardBottomBar {
  type?: "covered" | "spaced";
  icon?: React.ReactElement;
  title: string;
  onIconClick?: Function;
}

const ProfileCardImage: React.FC<ProfileCardImageProps> = (props) => {
  const { src, type } = props;
  const componentStyles = Styles();

  const imageClasses = cx(
    {
      [`${componentStyles["covered-image"]}`]: type === "covered",
    },
    {
      [`${componentStyles["spaced-image"]}`]: type === "spaced",
    }
  );
  return <img className={imageClasses} src={src} loading="lazy" />;
};

const ProfileCardBottomBar: React.FC<ProfileCardBottomBar> = (props) => {
  const { type, icon, title, onIconClick } = props;
  const componentStyles = Styles();
  const classes = cx(
    `${componentStyles["bottom-bar-base"]}`,
    {
      [`${componentStyles["bottom-bar-covered-base"]}`]: type === "covered",
    },
    {
      [`${componentStyles["bottom-bar-spaced-base"]}`]: type === "spaced",
    }
  );

  const iconClasses = cx(
    "icon-container",
    { "shadow-elevated": icon },
    { hidden: !icon }
  );

  const onClick = () => {
    onIconClick && onIconClick();
  };

  return (
    <div className={classes}>
      <div className="title">{title}</div>
      {icon && (
        <div onClick={onClick} className={iconClasses}>
          {icon && React.cloneElement(icon, { size: "normal" })}
        </div>
      )}
    </div>
  );
};

const ProfileCard: React.FC<ProfileCardRootProps> = (props) => {
  const { src, title, className, type, icon, onIconClick, style } = props;

  if (!src) {
    throw Error("Profile Cards requires src prop.");
  }
  if (!title) {
    throw Error("Profile Cards requires title prop.");
  }

  const componentStyles = Styles();
  const classes = cx(
    `${componentStyles["profile-card-base"]}`,
    { [`${componentStyles["profile-card-cover-base"]}`]: type === "covered" },
    { "shadow-elevated": type === "spaced" },
    className
  );

  return (
    <div style={style} className={classes}>
      <ProfileCardImage src={src} type={type} />
      <ProfileCardBottomBar
        type={type}
        icon={icon}
        title={title}
        onIconClick={onIconClick}
      />
    </div>
  );
};

ProfileCard.defaultProps = {
  type: "spaced",
};
export default ProfileCard;
