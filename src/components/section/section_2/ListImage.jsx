import React from "react";
import "./section_2.scss";
import Image from "next/image";

export default function ListImage() {
  return (
    <div className="business-home-list ani-item on-show snipcss-WiXxJ">
      <div
        className="business-home trigger-tab current"
        data-name="business-02"
      >
        <div className="box-img ">
          <svg
            xmlns="https://www.w3.org/2000/svg"
            className="svgMask "
            x="0px"
            y="0px"
            width={100}
            height={100}
            viewBox="0 0 100 100"
          >
            <defs className="">
              <clipPath id="maskID0">
                <path d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z" />
              </clipPath>
            </defs>
            <image
              className="bg-red-500 "
              clipPath="url(#maskID0)"
              width={100}
              height={100}
              xlinkHref="https://sengroup.vn/pictures/catalog/home/home-business/01.jpg"
              
            />
          </svg>{" "}
          <svg
            className="svg-stroke"
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z" />
          </svg>
        </div>
        <a
          href="https://sengroup.vn/cong-ty-thanh-vien/sen-healthcare.html"
          className="link-load"
          aria-label="Chăm Sóc Sức Khoẻ"
        />
        <span className="logo-bus-home">logo</span>
      </div>

      <div className="business-home trigger-tab" data-name="business-05">
        <div className="box-img">
          <svg
            xmlns="https://www.w3.org/2000/svg"
            className="svgMask"
            x="0px"
            y="0px"
            width={100}
            height={100}
            viewBox="0 0 100 100"
          >
            <defs>
              <clipPath id="maskID1">
                <path d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z" />
              </clipPath>
            </defs>
            <image
              clipPath="url(#maskID1)"
              width={100}
              height={100}
              xlinkHref="https://sengroup.vn/pictures/catalog/home/home-business/05.jpg"
            />
          </svg>{" "}
          <svg
            className="svg-stroke"
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z" />
          </svg>
        </div>{" "}
        <a
          href="https://sengroup.vn/cong-ty-thanh-vien/sen-mining.html"
          className="link-load"
          aria-label="Khai Thác Khoảng Sản"
        />{" "}
        <span className="logo-bus-home">
          <svg>
            <use xlinkHref="#ico-business-logo-05" />
          </svg>
        </span>
      </div>

      <div className="business-home trigger-tab" data-name="business-03">
        <div className="box-img">
          <svg
            xmlns="https://www.w3.org/2000/svg"
            className="svgMask"
            x="0px"
            y="0px"
            width={100}
            height={100}
            viewBox="0 0 100 100"
          >
            <defs>
              <clipPath id="maskID2">
                <path d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z" />
              </clipPath>
            </defs>
            <image
              clipPath="url(#maskID2)"
              width={100}
              height={100}
              xlinkHref="https://sengroup.vn/pictures/catalog/home/home-business/03.jpg"
            />
          </svg>{" "}
          <svg
            className="svg-stroke"
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z" />
          </svg>
        </div>{" "}
        <a
          href="https://sengroup.vn/cong-ty-thanh-vien/sen-construction.html"
          className="link-load"
          aria-label="Xây Dựng"
        />{" "}
        <span className="logo-bus-home">
          <svg>
            <use xlinkHref="#ico-business-logo-03" />
          </svg>
        </span>
      </div>

      <div className="business-home trigger-tab" data-name="business-04">
        <div className="box-img">
          <svg
            xmlns="https://www.w3.org/2000/svg"
            className="svgMask"
            x="0px"
            y="0px"
            width={100}
            height={100}
            viewBox="0 0 100 100"
          >
            <defs>
              <clipPath id="maskID3">
                <path d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z" />
              </clipPath>
            </defs>
            <image
              clipPath="url(#maskID3)"
              width={100}
              height={100}
              xlinkHref="https://sengroup.vn/pictures/catalog/home/home-business/04.jpg"
            />
          </svg>{" "}
          <svg
            className="svg-stroke"
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z" />
          </svg>
        </div>{" "}
        <a
          href="https://sengroup.vn/cong-ty-thanh-vien/sen-resort.html"
          className="link-load"
          aria-label="Du lịch"
        />{" "}
        <span className="logo-bus-home">
          <svg>
            <use xlinkHref="#ico-business-logo-04" />
          </svg>
        </span>
      </div>

      <div className="business-home trigger-tab" data-name="business-01">
        <div className="box-img">
          <svg
            xmlns="https://www.w3.org/2000/svg"
            className="svgMask"
            x="0px"
            y="0px"
            width={100}
            height={100}
            viewBox="0 0 100 100"
          >
            <defs>
              <clipPath id="maskID4">
                <path d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z" />
              </clipPath>
            </defs>
            <image
              clipPath="url(#maskID4)"
              width={100}
              height={100}
              xlinkHref="https://sengroup.vn/pictures/catalog/home/home-business/02.jpg"
            />
          </svg>{" "}
          <svg
            className="svg-stroke"
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path d="M46.3,97.3L2.7,53.7c-2.1-2.1-2.1-5.4,0-7.5L46.3,2.7c2.1-2.1,5.4-2.1,7.5,0l43.5,43.5c2.1,2.1,2.1,5.4,0,7.5L53.7,97.3C51.7,99.3,48.3,99.3,46.3,97.3z" />
          </svg>
        </div>{" "}
        <a
          href="https://sengroup.vn/cong-ty-thanh-vien/sen-real.html"
          className="link-load"
          aria-label="Bất động sản"
        />{" "}
        <span className="logo-bus-home">
          <svg>
            <use xlinkHref="#ico-business-logo-01" />
          </svg>
        </span>
      </div>
    </div>
  );
}
