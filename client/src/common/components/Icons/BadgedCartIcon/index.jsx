import React from "react";
import {FaHeart} from "react-icons/fa";
import {Badge} from "reactstrap";
import {HeartIcon} from "./styles";

const BadgedCartIcon = ({numOfItems}) => {
  return (
    <HeartIcon>
      <Badge color="danger" className="badge-num">
        {numOfItems > 0 ? (numOfItems < 100 ? numOfItems : "+99") : 0}
      </Badge>
      <FaHeart />
    </HeartIcon>
  );
};

export default BadgedCartIcon;
