import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./details.css";

export default function Details() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="details">
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Mô tả</MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Đánh giá (0)</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Chính sách bảo hành</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div className="content">
        <p>
          Alaska là giống chó tuyết đang rất được ưa chuộng ở Việt Nam. Bộ lông
          mượt và dày quyến rũ, thân hình giống loài chó sói hùng mạnh đã khiến
          không ít người săn tìm và sẵn sàng bỏ ra hàng chục triệu đồng để rước
          một em Alaska về nhà. Tuy nhiên cũng không ít người mua phải chó
          Alaska bị lai tạp, tưởng rằng đã mua được chó Alaska đẹp, chuẩn nhưng
          thực chất lại là con lai rất “hoàn hảo” của Alaska
        </p>
      </div>
    </div>
  );
}
