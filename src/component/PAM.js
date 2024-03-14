import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { IoIosRefresh } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { IoBanOutline, IoSearch } from "react-icons/io5";
import { LiaDotCircleSolid } from "react-icons/lia";
import { AiFillFileAdd } from "react-icons/ai";
import { MdBookmarkBorder } from "react-icons/md";
import { LiaEyeSolid } from "react-icons/lia";
import { TfiAngleDown } from "react-icons/tfi";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

export default class PAM extends Component {
  render() {
    const columns = [
      {
        name: "Vật tư, hàng hoá",
        selector: (row) => row.items,
      },
      {
        name: "Số lượng cần mua",
        selector: (row) => row.quantity,
      },
    ];
    const data = [
      {
        id: 1,
        items: "Bơ, pho mai",
        quantity: "10000 cái",
      },
      {
        id: 2,
        items: "Thực phẩm khô, gia vị",
        quantity: "10000 cái",
      },
      {
        id: 3,
        items: "Bàn đá, bàn gang",
        quantity: "10000 cái",
      },
      {
        id: 4,
        items: "Gương kính",
        quantity: "10000 cái",
      },
      {
        id: 5,
        items: "Thiết bị cân",
        quantity: "10000 cái",
      },
    ];

    const columns2 = [
      {
        name: "Mã ĐNMS",
        cell: (row) => (
          <div style={{ color: "rgb(112, 161, 250)" }}>
            <span>{row.dnmsCodes}</span>
          </div>
        ),
      },
      {
        name: "Đơn vị",
        cell: (row) => (
          <div style={{}}>
            <span>{row.units}</span>
          </div>
        ),
      },
      {
        icon: "",
        cell: (row) => (
          <div
            style={{
              textAlign: "right",
            }}
          >
            <span>{row.icon}</span>
            <AiFillFileAdd color="rgb(112, 161, 250)" />
          </div>
        ),
      },
    ];
    const data2 = [
      {
        id: 1,
        dnmsCodes: "PR.2023.00000010",
        units: "GGG-NH GoGi Tô Hiệu",
        icon: "",
      },
      {
        id: 2,
        dnmsCodes: "PR.2023.00000009",
        units: "GGG-NH GoGi Nguyễn Chí Thanh",
        icon: "",
      },
      {
        id: 3,
        dnmsCodes: "PR.2023.00000008",
        units: "GGG-NH Sumo Nguyễn Phong Sắc",
        icon: "",
      },
      {
        id: 4,
        dnmsCodes: "PR.2023.00000008",
        units: "GGG-NH Sumo Nguyễn Thị Định",
        icon: "",
      },
      {
        id: 5,
        dnmsCodes: "PR.2023.00000008",
        units: "Phòng kế hoạch và phát triển",
        icon: "",
      },
    ];
    const columns3 = [
      {
        name: "Mã PAM#",
        cell: (row) => (
          <div style={{ color: "rgb(112, 161, 250)" }}>
            <span>{row.PAMCodes}</span>
          </div>
        ),
      },
      {
        name: "Tên PAM",
        selector: (row) => row.PAMName,
      },
      {
        name: "Người tạo",
        selector: (row) => row.creatorName,
      },
      {
        name: "Ngày tạo",
        selector: (row) => row.dateCreated,
      },
      {
        name: "Loại sự kiện",
        selector: (row) => row.eventType,
      },
      {
        name: "Ngày bắt đầu báo giá",
        selector: (row) => row.doq,
      },
      {
        name: "Ngày kết thúc báo giá",
        selector: (row) => row.qed,
      },
      {
        name: "Số lượng phản hồi",
        selector: (row) => row.numbResponse,
      },
      {
        name: "Trạng thái",
        cell: (row) => (
          <>
            {row.status === "Mới tạo" && (
              <span>
                <IoIosRefresh style={{ marginBottom: 2 }}></IoIosRefresh>
                {row.status}
              </span>
            )}
            {row.status === "Chờ duyệt sự kiện" && (
              <span>
                <CiClock2 style={{ marginBottom: 2 }}></CiClock2>
                {row.status}
              </span>
            )}
            {row.status === "Chờ diễn ra" && (
              <span>
                <LiaDotCircleSolid
                  style={{ marginBottom: 2 }}
                ></LiaDotCircleSolid>
                {row.status}
              </span>
            )}
            {row.status === "Đã huỷ" && (
              <span>
                <IoBanOutline style={{ marginBottom: 2 }}></IoBanOutline>
                {row.status}
              </span>
            )}
          </>
        ),
      },
    ];
    const customStyles = {
      headRow: {
        style: {
          backgroundColor: "lightgray", // Change the background color of the header row
        },
      },
    };
    const data3 = [
      {
        id: 1,
        PAMCodes: "PR.2023.0000010",
        PAMName: "Sự kiện chào giá cá hồi Na Uy",
        creatorName: "Nguyễn Văn ABC",
        dateCreated: "06-03-2023",
        eventType: "RFQ",
        doq: "06-03-2023",
        qed: "06-03-2023",
        numbResponse: "0 phản hồi",
        status: "Mới tạo",
      },
      {
        id: 2,
        PAMCodes: "PR.2023.0000008",
        PAMName: "Sự kiện đấy thầu lò nướng 2023 ",
        creatorName: "Nguyễn Văn ABC",
        dateCreated: "06-03-2023",
        eventType: "RFQ",
        doq: "06-03-2023",
        qed: "06-03-2023",
        numbResponse: "0 phản hồi",
        status: "Chờ duyệt sự kiện",
      },
      {
        id: 3,
        PAMCodes: "PR.2023.0000008",
        PAMName: "Sự kiến chào giá sản phẩm sữa",
        creatorName: "Nguyễn Văn ABC",
        dateCreated: "06-03-2023",
        eventType: "RFQ",
        doq: "06-03-2023",
        qed: "06-03-2023",
        numbResponse: "0 phản hồi",
        status: "Chờ diễn ra",
      },
      {
        id: 4,
        PAMCodes: "PR.2023.0000008",
        PAMName: "Sự kiến mua lò nướng công nghiệp",
        creatorName: "Nguyễn Văn ABC",
        dateCreated: "06-03-2023",
        eventType: "RFQ",
        doq: "06-03-2023",
        qed: "06-03-2023",
        numbResponse: "0 phản hồi",
        status: "Đã huỷ",
      },
    ];
    return (
      <div class="main">
        <div id="container">
          <p style={{ color: "blue", marginLeft: 30, paddingTop: 5 }}>
            <Link to="/#">Tổng Quan /</Link>
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: 24,
              paddingLeft: 30,
            }}
          >
            Quản lý phương án mua
          </p>
        </div>
        <div class="first-container" style={{ marginTop: 20 }}>
          <div class="first-table">
            <h3 style={{ paddingLeft: 20, paddingTop: 15 }}>
              Hàng hoá cần mua
            </h3>
            <p style={{ color: "gray", paddingLeft: 20 }}>
              Lựa chọn các hàng hoá đang có nhu cầu để mua tập trung
            </p>
            <div className="text-end">
              <input type="text" placeholder="Tìm kiếm" />
            </div>
            <div className="first-table-content">
              <DataTable
                columns={columns}
                data={data}
                selectableRows
                noHeader
              ></DataTable>
            </div>
          </div>
          <div className="second-table">
            <h3 style={{ paddingLeft: 20, paddingTop: 15 }}>Đề nghị mua</h3>
            <p style={{ color: "gray", paddingLeft: 20 }}>
              Cho PAM một đề nghị
            </p>
            <div className="text-end">
              <input type="text" placeholder="Tìm kiếm"></input>
            </div>
            <div className="second-table-content">
              <DataTable
                columns={columns2}
                data={data2}
                selectableRows
              ></DataTable>
            </div>
          </div>
        </div>
        <div className="second-container">
          <div className="second-table-container">
            <h3 style={{ paddingLeft: 15, marginTop: 10 }}>
              Danh Sách Phương Án Mua
            </h3>
            <p style={{ color: "gray", paddingLeft: 15 }}>
              Danh sách các phương án mua (PAM) được tạo ra trên hệ thống mà
              người dùng được phân quyền truy xuất
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ color: "rgb(112, 161, 250)" }}>
                <p style={{ paddingLeft: 25, marginTop: 10 }}></p>
                <div style={{ display: "flex", marginLeft: 15 }}>
                  <div>
                    <div
                      style={{ display: "flex", marginRight: 5, marginTop: 1 }}
                    >
                      <LiaEyeSolid size={20} />
                    </div>
                  </div>
                  View:View all
                  <TfiAngleDown
                    size={15}
                    style={{ marginTop: 3, marginLeft: 3 }}
                  />
                </div>
              </div>

              <div style={{ display: "flex" }}>
                <div style={{ marginTop: 15, marginRight: 10 }}>
                  <IoSearch size={20} style={{ marginRight: 20 }}></IoSearch>
                  <MdBookmarkBorder size={20}></MdBookmarkBorder>
                </div>
                <button class="button">
                  Tạo mới PAM
                  <GoPlus
                    size={15}
                    style={{ marginLeft: 5, marginBottom: 2 }}
                  />
                </button>
              </div>
            </div>
            <div>
              <DataTable
                columns={columns3}
                data={data3}
                customStyles={customStyles}
              ></DataTable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
