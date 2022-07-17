import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { sideBarItems } from "../../constant";
import { useLocation } from "react-router-dom";

export default function NavList() {
  const location = useLocation();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <ListGroup
      defaultActiveKey="#link1"
      className="d-flex flex-column gap-3 fs-5"
    >
      {sideBarItems.map((item, index) => (
        <ListGroup.Item
          key={index}
          action
          href={item.href}
          active={url === item.href ? true : false}
          className="border-0 rounded-pill px-4 py-3 d-flex align-items-center"
        >
          {item.icons}&nbsp;&nbsp;&nbsp;{item.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
