/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      {/* saved from url=(0105)https://api.cvmaker.nl/resumes/2bb38562904f5039821e6f57e236f3ac4cec0e1f/preview/2/3f6592/hYNnxJPavYr3L6sL */}
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="Cache-Control" content="no-cache" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content={0} />
      {/* fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700"
        rel="stylesheet"
      />
      <link href="./CV1_files/css" rel="stylesheet" />
      {/* ./fonts */}
      {/* css */}
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n      * {\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        box-sizing: border-box;\n      }\n\n      html {\n        height: 100%;\n      }\n\n      body {\n        width: 21cm;\n        height: 100%;\n        min-height: 29.7cm;\n        position: relative;\n        margin: 0;\n        padding: 0 0;\n        color: #333333;\n        line-height: 22px;\n        font: 12px "Source Sans Pro", Arial;\n        font-style: normal;\n      }\n\n      h1 {\n        letter-spacing: 0.08em;\n        text-transform: uppercase;\n        font-style: normal;\n        font-size: 30px;\n        margin: 0;\n        padding: 16px 0 24px 0;\n        font-weight: 600;\n      }\n      h1 span {\n        position: relative;\n        font-style: normal;\n        display: inline;\n        margin-right: 3px;\n        padding: 0;\n      }\n\n      h2 {\n        text-transform: uppercase;\n        font-size: 17px;\n        font-weight: 600;\n        margin: 0;\n        padding: 0;\n      }\n\n      h3 {\n        font-size: 14px;\n        font-weight: 600;\n        margin: 0;\n        padding: 0;\n      }\n\n      p {\n        color: #4c4c4c;\n        line-height: 18px;\n        font-weight: 400;\n        margin: 0;\n        padding: 0;\n      }\n\n      hr {\n        border: none;\n        height: 1px;\n        width: 100%;\n        padding: 0;\n        margin: 0;\n        background: #d2d2d2;\n      }\n\n      .sections {\n        left: 235px;\n        position: relative;\n        width: 535px;\n      }\n\n      .section {\n        position: relative;\n        width: 100%;\n        padding: 0;\n      }\n      .section p {\n        display: block;\n        font-style: normal;\n      }\n      .section:last-child {\n        border: none;\n      }\n      .section.section--summary {\n        top: -10px;\n        margin-bottom: 10px;\n      }\n\n      .section--title {\n        display: inline-block;\n        position: relative;\n        width: 100%;\n        z-index: 99;\n        margin: 0 0 0 0;\n        font-weight: 600;\n        background: #fff;\n        padding: 19px 0 10px 10px;\n        border-top: 1px solid #d2d2d2;\n        page-break-inside: avoid;\n      }\n      .section--title span {\n        display: inline-block;\n        margin-right: 2px;\n      }\n\n      .section--title-icon {\n        position: relative;\n        top: 0px;\n        display: inline-block;\n        height: 32px;\n        width: 32px;\n        margin-left: -15px;\n        margin-right: 10px;\n        border-radius: 50%;\n        border: 1px solid #2b2b38;\n      }\n      .section--title-icon svg {\n        position: relative;\n        top: 3px;\n        left: 4px;\n        height: 20px;\n        width: 20px;\n        fill: #2b2b38;\n      }\n      .section--title-icon.education svg {\n        top: 4px;\n        left: 4px;\n      }\n      .section--title-icon.course svg {\n        top: 5px;\n        left: 5px;\n      }\n      .section--title-icon.work svg {\n        top: 4px;\n        left: 5px;\n      }\n      .section--title-icon.internships svg {\n        top: 4px;\n        left: 5px;\n      }\n      .section--title-icon.certificate svg {\n        top: 4px;\n        left: 5px;\n      }\n      .section--title-icon.single-textarea svg {\n        top: 4px;\n        left: 5px;\n      }\n      .section--title-icon.extra-curricular svg {\n        top: 4px;\n        left: 5px;\n      }\n      .section--title-icon.characteristic svg {\n        top: 4px;\n        left: 5px;\n      }\n      .section--title-icon.skill svg {\n        top: 4px;\n        left: 5px;\n      }\n      .section--title-icon.hobby svg {\n        top: 5px;\n        left: 5px;\n      }\n      .section--title-icon.language svg {\n        top: 5px;\n        left: 5px;\n      }\n      .section--title-icon.reference svg {\n        top: 5px;\n        left: 5px;\n      }\n\n      .section--time-line-overlay {\n        position: absolute;\n        top: 0;\n        left: 10px;\n        height: 100%;\n        width: 1px;\n        background: #2b2b38;\n      }\n\n      .section--time-line {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 1px;\n        background: #2b2b38;\n      }\n\n      .section--time-line-hide-overlay {\n        display: none;\n        position: absolute;\n        left: -5px;\n        top: 25px;\n        width: 10px;\n        height: 100%;\n        background: #fff;\n        z-index: 9;\n      }\n\n      .section.references .section--time-line-dot {\n        top: 15px;\n      }\n      .section.references .section--date {\n        top: 10px;\n      }\n      .section.references .section--time-line-hide-overlay {\n        height: 95%;\n      }\n\n      .section--item:last-child {\n        background: #fff;\n        padding-bottom: 15px;\n      }\n      .section--item:last-child .section--time-line {\n        height: 30px;\n      }\n      .section--item:last-child .section--time-line-hide-overlay {\n        display: inline;\n      }\n\n      .section:last-child .section--item:last-child {\n        padding-bottom: 0;\n      }\n      /*.section:last-child .section--item:last-child .section--heading-group {\n            padding-bottom: 0;\n        }*/\n\n      .section--time-line-dot {\n        position: absolute;\n        left: -4px;\n        top: 16px;\n        height: 9px;\n        width: 9px;\n        border-radius: 50%;\n        background: #fff;\n        border: 1px solid #2b2b38;\n      }\n\n      .section--heading-group {\n        display: block;\n        margin: 0;\n        padding: 0 0 6px 0;\n        page-break-inside: avoid !important;\n      }\n\n      .section--list {\n        display: block;\n        list-style: none;\n        padding: 0 0 0 10px;\n        margin: 0;\n      }\n      .section--list.skills {\n        margin-bottom: 20px;\n      }\n      .section--list.no-indent .section--item {\n        padding-left: 20px;\n      }\n\n      .section--item {\n        display: block;\n        position: relative;\n        list-style: none;\n        padding: 0 0 0 140px;\n        margin: 0;\n      }\n      .section--item.skills {\n        display: inline-block;\n        padding-top: 5px;\n        padding-bottom: 0px;\n        width: 100%;\n        margin: 0;\n        padding-left: 25px;\n        border-left: 1px solid #2b2b38;\n      }\n      .section--item.skills h3 {\n        font-size: 13px;\n      }\n      .section--item.skills:last-child {\n        padding-bottom: 0;\n      }\n\n      .skills--label {\n        display: inline-block;\n        width: 175px;\n        margin: 0 0 0 -5px;\n      }\n\n      .skills--stars {\n        display: inline-block;\n        position: relative;\n        top: 4px;\n      }\n      .skills--stars svg {\n        fill: #b1b1b1;\n      }\n      .skills--stars svg.active {\n        fill: #2b2b38;\n      }\n\n      .section--date {\n        position: absolute;\n        left: 20px;\n        top: 12px;\n        width: 120px;\n        font-size: 13px;\n        padding: 0;\n        margin: 0;\n      }\n\n      .section--heading {\n        display: block;\n        padding: 10px 0 0 0;\n        margin: 0;\n      }\n\n      .section--sub-heading {\n        display: block;\n        padding: 0;\n        margin: 0;\n        color: #a43d46;\n        font-size: 13px;\n      }\n\n      .section--content {\n        display: block;\n        padding: 0;\n        margin: 0;\n      }\n      .section--content p {\n        display: block;\n      }\n      .section--content ul,\n      .section--content ol {\n        page-break-inside: auto;\n        white-space: normal;\n        font-weight: 400;\n        list-style-position: outside;\n        color: #4c4c4c;\n        margin: 0;\n        padding: 0 0 0 16px;\n      }\n      .section--content ul li,\n      .section--content ol li {\n        line-height: 18px;\n      }\n      .section--content ul li {\n        list-style-type: disc;\n      }\n      .section--content ol {\n        padding-left: 14px;\n      }\n\n      .section--content-single-textarea {\n        padding-bottom: 10px;\n      }\n\n      .sidebar--bg {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 215px;\n        background: #2b2b38;\n        height: 18000px;\n        overflow-x: hidden;\n        overflow-y: hidden;\n      }\n\n      .sidebar {\n        left: 0;\n        position: fixed;\n        z-index: 1;\n        color: #fff;\n        padding: 25px 0 0 14px;\n        width: 215px;\n        height: auto;\n      }\n\n      .avatar--bg {\n        left: -10px;\n        top: -70px;\n        position: fixed;\n        z-index: 0;\n        margin: 0;\n        padding: 0;\n        background: #a43d47;\n        width: 225px;\n        height: 270px;\n        display: none;\n      }\n\n      .avatar {\n        position: relative;\n        display: inline-block;\n        z-index: 2;\n        padding: 0;\n        margin: 0 0 0 9px;\n        height: 155px;\n        width: 155px;\n        border-radius: 50%;\n        background-size: cover !important;\n        border: 2px solid #fff;\n      }\n\n      .sidebar--data {\n        display: block;\n      }\n\n      .sidebar--title {\n        display: inline-block;\n        font-size: 15px;\n        font-style: normal;\n        position: relative;\n        width: 88%;\n        padding: 20px 0 5px 0;\n        margin: 0 0 0 0;\n        page-break-inside: avoid;\n        letter-spacing: 0.08em;\n      }\n      .sidebar--title span {\n        display: inline-block;\n        width: 100%;\n        margin: 0;\n        padding: 0;\n        font-weight: 600;\n        font-style: normal;\n        padding-right: 2px;\n        z-index: 1;\n        background: #607d8b;\n      }\n      .sidebar--title span:last-child {\n        padding-right: 10px;\n      }\n      .sidebar--title hr {\n        position: absolute;\n        left: 0;\n        bottom: 18px;\n        border: none;\n        height: 1px;\n        width: calc(100% - 10px);\n        background: #fff;\n      }\n\n      .sidebar--title svg {\n        position: relative;\n        top: 4px;\n        margin-right: 4px;\n      }\n\n      .sidebar--label {\n        font-weight: 600;\n      }\n\n      .sidebar--list {\n        display: block;\n        list-style: none;\n        margin: 0;\n        padding: 0;\n      }\n\n      .sidebar--item {\n        display: block;\n        list-style: none;\n        position: relative;\n        font-size: 12px;\n        margin: 0;\n        padding: 0 5px 5px 0;\n      }\n      .sidebar--item.sidebar--item-personal {\n        padding: 0 5px 5px 23px;\n      }\n      .sidebar--item.sidebar--item-interest {\n        padding-left: 12px;\n        padding-bottom: 0;\n      }\n      .sidebar--item:last-child {\n        padding-bottom: 0;\n      }\n\n      .sidebar--icon-square {\n        display: inline-block;\n        height: 5px;\n        width: 5px;\n        position: absolute;\n        top: 9px;\n        margin: 0 5px 0 0;\n        background: #fff;\n        left: 0;\n      }\n\n      .sidebar--item-icon {\n        top: 2px;\n        left: -8px;\n        position: absolute;\n        fill: #fff;\n        height: 15px;\n      }\n\n      .sidebar--item-text {\n        line-height: 21px;\n      }\n\n      .sidebar--item-align-right {\n        float: right;\n        margin-right: 10px;\n      }\n\n      .c--434a54 .sidebar--bg,\n      .c--434a54 .sidebar--title span {\n        background: #434a54 !important;\n      }\n\n      .c--434a54 .section--sub-heading {\n        color: #757575;\n      }\n\n      .c--434a54 .skills--stars svg {\n        fill: #434a54 !important;\n      }\n\n      .c--434a54 .skills--stars svg:not(.active) {\n        opacity: 0.4;\n      }\n\n      .c--da4453 .sidebar--bg,\n      .c--da4453 .sidebar--title span {\n        background: #da4453 !important;\n      }\n\n      .c--da4453 .section--sub-heading {\n        color: #a43d46;\n      }\n\n      .c--da4453 .skills--stars svg {\n        fill: #da4453 !important;\n      }\n\n      .c--da4453 .skills--stars svg:not(.active) {\n        opacity: 0.4;\n      }\n\n      .c--3f6592 .sidebar--bg,\n      .c--3f6592 .sidebar--title span {\n        background: #3f6592 !important;\n      }\n\n      .c--3f6592 .section--sub-heading {\n        color: #3f6592;\n      }\n\n      .c--3f6592 .skills--stars svg {\n        fill: #3f6592 !important;\n      }\n\n      .c--3f6592 .skills--stars svg:not(.active) {\n        opacity: 0.4;\n      }\n\n      .c--f1b230 .sidebar--bg,\n      .c--f1b230 .sidebar--title span {\n        background: #f1b230 !important;\n      }\n\n      .c--f1b230 .section--sub-heading {\n        color: #986c14;\n      }\n\n      .c--f1b230 .skills--stars svg {\n        fill: #f1b230 !important;\n      }\n\n      .c--f1b230 .skills--stars svg:not(.active) {\n        opacity: 0.4;\n      }\n\n      .c--37bc9b .sidebar--bg,\n      .c--37bc9b .sidebar--title span {\n        background: #37bc9b !important;\n      }\n\n      .c--37bc9b .section--sub-heading {\n        color: #187d64;\n      }\n\n      .c--37bc9b .skills--stars svg {\n        fill: #37bc9b !important;\n      }\n\n      .c--37bc9b .skills--stars svg:not(.active) {\n        opacity: 0.4;\n      }\n\n      html[lang="tr"] body {\n        font-family: "Helvetica";\n      }\n      html[lang="tr"] .section--date {\n        font-size: 12px;\n        width: 130px;\n      }\n      html[lang="tr"] .sidebar--item {\n        line-height: 18px;\n      }\n\n      strong {\n        white-space: nowrap;\n      }\n\n      a {\n        text-decoration: none;\n        color: #ffffff;\n      }\n    ',
        }}
      />
      <div className="sidebar--bg" />
      <aside className="sidebar">
        <div className="avatar--bg" />
        <div
          className="avatar"
          style={{ background: 'url("avatar.jpg") no-repeat' }}
        >
          &nbsp;
        </div>
        <div className="sidebar--data">
          <h2 className="sidebar--title">
            <span>Personal</span>
          </h2>
          <ul className="sidebar--list">
            <li className="sidebar--item sidebar--item-personal">
              <svg
                className="sidebar--item-icon"
                fill="#000000"
                height={24}
                viewBox="0 0 24 24"
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              <span className="sidebar--label">Nombre</span>
              <br />
              Eugeniu Stina
            </li>
            <li className="sidebar--item sidebar--item-personal">
              <svg
                className="sidebar--item-icon"
                fill="#000000"
                height={24}
                viewBox="0 0 24 24"
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="sidebar--label">Número de teléfono</span>
              <br />
              +34642687218
            </li>
            <li className="sidebar--item sidebar--item-personal">
              <svg
                className="sidebar--item-icon"
                fill="#000000"
                height={24}
                viewBox="0 0 24 24"
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              <span className="sidebar--label">Correo electrónico</span>
              <br />
              <a href="mailto:eugen.stina@gmail.com">eugen.stina@gmail.com</a>
            </li>
            <li className="sidebar--item sidebar--item-personal">
              <svg
                className="sidebar--item-icon"
                fill="#000000"
                height={24}
                viewBox="0 0 24 24"
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
              </svg>
              <span className="sidebar--label">Portfolio</span>
              <br />
              <a href="https://eugeniu.codes/">eugeniu.codes</a>
            </li>
            <li className="sidebar--item sidebar--item-personal">
              <svg
                className="sidebar--item-icon"
                fill="#000000"
                height={24}
                viewBox="0 0 24 24"
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
              </svg>
              <span className="sidebar--label">LinkedIn</span>
              <br />
              <a href="https://linkedin.com/in/estina">
                linkedin.com/in/estina
              </a>
            </li>
            <li className="sidebar--item sidebar--item-personal">
              <svg
                className="sidebar--item-icon"
                fill="#000000"
                height={24}
                viewBox="0 0 24 24"
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
              </svg>
              <span className="sidebar--label">Git</span>
              <br />
              <a href="https://github.com/xplore93">github.com/xplore93</a>
            </li>
          </ul>
        </div>
        <div className="sidebar--data">
          <h2 className="sidebar--title">
            <span>Idiomas</span>
          </h2>
          <ul className="sidebar--list">
            <li className="sidebar--item">
              <span className="sidebar--label">Ruso</span>
              <span className="sidebar--item-align-right">
                <svg
                  className="active"
                  fill="#ffffff"
                  height={14}
                  viewBox="0 0 24 24"
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#ffffff"
                  height={14}
                  viewBox="0 0 24 24"
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#ffffff"
                  height={14}
                  viewBox="0 0 24 24"
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#ffffff"
                  height={14}
                  viewBox="0 0 24 24"
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#ffffff"
                  height={14}
                  viewBox="0 0 24 24"
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </span>
            </li>
            <li className="sidebar--item">
              <span className="sidebar--label">Rumano</span>
              <span className="sidebar--item-align-right">
                <svg
                  className="active"
                  fill="#ffffff"
                  height={14}
                  viewBox="0 0 24 24"
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#ffffff"
                  height={14}
                  viewBox="0 0 24 24"
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#ffffff"
                  height={14}
                  viewBox="0 0 24 24"
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#ffffff"
                  height={14}
                  viewBox="0 0 24 24"
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#ffffff"
                  height={14}
                  viewBox="0 0 24 24"
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </span>
            </li>
            <li className="sidebar--item">
              <span className="sidebar--label">Inglés</span>
              <span className="sidebar--item-align-right">
                <svg
                  className="active"
                  fill="#ffffff"
                  height={14}
                  viewBox="0 0 24 24"
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#ffffff"
                  height={14}
                  viewBox="0 0 24 24"
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#ffffff"
                  height={14}
                  viewBox="0 0 24 24"
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#ffffff"
                  height={14}
                  viewBox="0 0 24 24"
                  width={14}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </aside>
      <section className="sections">
        <div className="section--name">
          <h1>Eugeniu Stina</h1>
        </div>
        <div className="section">
          <div className="section section--summary">
            <div className="section--content">
              <p>
                Soy desarrollador de software y web. He tenido curiosidad por
                las nuevas tecnologías toda mi vida. Es por eso que he estado
                programando desde que tenía 12 años. Inicialmente, eran simples
                scripts, páginas HTML puras y aplicaciones de consola. He
                desarrollado proyectos más complejos, como páginas web hechas
                con frameworks o aplicaciones C / C++. Además, he trabajado con
                Docker y Kubernetes para montar cluster con un servidor web y
                Grafana Dashboard para las métricas.
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section--title">
            <h2>
              <i className="section--title-icon work">
                <svg
                  fill="#000000"
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0h24v24H0zm10 5h4v2h-4zm0 0h4v2h-4z"
                    fill="none"
                  />
                  <path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z" />
                </svg>
              </i>
              Experiencia laboral
            </h2>
          </div>
          <div className="section--time-line-overlay" />
          <ol className="section--list">
            <li className="section--item">
              <div className="section--time-line">
                <i className="section--time-line-dot" />
              </div>
              <div className="section--time-line-hide-overlay" />
              <div className="section--heading-group">
                <div className="section--date">jun 2019 - sep 2019</div>
                <div className="section--heading">
                  <h3>Técnico informático</h3>
                </div>
                <div className="section--sub-heading">Geodis, Pamplona</div>
              </div>
              <div className="section--content">
                <p>
                  Debido a mi exitosa experiencia y desempeño en este puesto, la
                  compañía me contrató nuevamente para ocupar el mismo puesto.
                </p>
              </div>
            </li>
            <li className="section--item">
              <div className="section--time-line">
                <i className="section--time-line-dot" />
              </div>
              <div className="section--time-line-hide-overlay" />
              <div className="section--heading-group">
                <div className="section--date">jun 2018 - sep 2018</div>
                <div className="section--heading">
                  <h3>Técnico informático</h3>
                </div>
                <div className="section--sub-heading">Geodis, Pamplona</div>
              </div>
              <div className="section--content">
                <p>
                  Funciones: Mantenimiento de los sistemas informáticos de las
                  oficinas de España y Portugal. Resolución de problemas de todo
                  tipo de complejidad y de urgencia. Control y gestión de los
                  suministros informáticos en todas las oficinas.
                </p>
                <p>
                  Logros: He aprendido resolver problemas urgentes con fluidez y
                  firmeza. Gestionar un número importante de equipos
                  informáticos de la empresa. Automatizar algunas tareas del
                  departamento de informática.
                </p>
              </div>
            </li>
            <li className="section--item">
              <div className="section--time-line">
                <i className="section--time-line-dot" />
              </div>
              <div className="section--time-line-hide-overlay" />
              <div className="section--heading-group">
                <div className="section--date">abr 2015 - jul 2015</div>
                <div className="section--heading">
                  <h3>Asesor financiero</h3>
                </div>
                <div className="section--sub-heading">
                  Caja Rural de Navarra, Pamplona
                </div>
              </div>
              <div className="section--content">
                <p>
                  Funciones: He realizado tareas de Asesor Financiero de cara al
                  público.&nbsp;Tareas como extracto de las cuentas, gestión de
                  problemas con tarjetas, cuentas, libretas. Creación de cuentas
                  y gestión de la información sensible de los clientes.
                </p>
                <p>
                  Logros: Aprendí a trabajar con varios grupos de clientes y a
                  proporcionar respuestas de manera ágil, puntual y eficiente.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div className="section">
          <div className="section--title">
            <h2>
              <i className="section--title-icon education">
                <svg
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                </svg>
              </i>
              Estudios y certificaciones
            </h2>
          </div>
          <div className="section--time-line-overlay" />
          <ol className="section--list">
            <li className="section--item">
              <div className="section--time-line">
                <i className="section--time-line-dot" />
              </div>
              <div className="section--time-line-hide-overlay" />
              <div className="section--heading-group">
                <div className="section--date">sep 2019 - Actualidad</div>
                <div className="section--heading">
                  <h3>Desarrollo</h3>
                </div>
                <div className="section--sub-heading">42Madrid, Madrid</div>
              </div>
              <div className="section--content">
                <p>
                  42 Madrid, la escuela de programación más innovadora del
                  mundo. Una escuela sin profesores, sin horarios,
                </p>
                <p>
                  abierta 24/7, gratuita, basada en aprendizaje entre pares y
                  donde el alumno marca su propio ritmo de
                </p>
                <p>aprendizaje y decide sobre su currículum.</p>
                <p>Una metodología que cambia el paradigma de la educación.</p>
              </div>
            </li>
            <li className="section--item">
              <div className="section--time-line">
                <i className="section--time-line-dot" />
              </div>
              <div className="section--time-line-hide-overlay" />
              <div className="section--heading-group">
                <div className="section--date">sep 2018 - Actualidad</div>
                <div className="section--heading">
                  <h3>Ingeniería Informática</h3>
                </div>
                <div className="section--sub-heading">
                  Universidad Pública de Navarra, Pamplona
                </div>
              </div>
            </li>
            <li className="section--item">
              <div className="section--time-line">
                <i className="section--time-line-dot" />
              </div>
              <div className="section--time-line-hide-overlay" />
              <div className="section--heading-group">
                <div className="section--date">sep 2013 - jul 2015</div>
                <div className="section--heading">
                  <h3>Grado Superior en Administración y Finanzas</h3>
                </div>
                <div className="section--sub-heading">
                  IES Elizondo, Pamplona
                </div>
              </div>
              <div className="section--content" />
            </li>
          </ol>
        </div>
        <div className="section">
          <div className="section--title">
            <h2>
              <i className="section--title-icon skill">
                <svg
                  fill="#000000"
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z" />
                </svg>
              </i>
              Tecnologías
            </h2>
          </div>
          <div className="section--time-line-overlay" />
          <ol className="section--list skills">
            <li className="section--item skills">
              <div className="skills--label">
                <h3>C / C++</h3>
              </div>
              <div className="skills--stars">
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </li>
            <li className="section--item skills">
              <div className="skills--label">
                <h3>Python</h3>
              </div>
              <div className="skills--stars">
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </li>
            <li className="section--item skills">
              <div className="skills--label">
                <h3>Java</h3>
              </div>
              <div className="skills--stars">
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </li>
            <li className="section--item skills">
              <div className="skills--label">
                <h3>PHP / Laravel Framework (Backend)</h3>
              </div>
              <div className="skills--stars">
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </li>
            <li className="section--item skills">
              <div className="skills--label">
                <h3>Docker</h3>
              </div>
              <div className="skills--stars">
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </li>
            <li className="section--item skills">
              <div className="skills--label">
                <h3>Kubernetes</h3>
              </div>
              <div className="skills--stars">
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </li>
            <li className="section--item skills">
              <div className="skills--label">
                <h3>Git</h3>
              </div>
              <div className="skills--stars">
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </li>
            <li className="section--item skills">
              <div className="skills--label">
                <h3>Trello</h3>
              </div>
              <div className="skills--stars">
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </li>
            <li className="section--item skills">
              <div className="skills--label">
                <h3>Visual Studio Code</h3>
              </div>
              <div className="skills--stars">
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </li>
            <li className="section--item skills">
              <div className="skills--label">
                <h3>Redmine</h3>
              </div>
              <div className="skills--stars">
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </li>
            <li className="section--item skills">
              <div className="skills--label">
                <h3>SQL</h3>
              </div>
              <div className="skills--stars">
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  className="active"
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <svg
                  fill="#000000"
                  height={18}
                  viewBox="0 0 24 24"
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </li>
          </ol>
        </div>
        <div className="section">
          <div className="section--title">
            <h2>
              <i className="section--title-icon certificate">
                <svg
                  fill="#000000"
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
              </i>
              Certificados
            </h2>
          </div>
          <div className="section--time-line-overlay" />
          <ol className="section--list">
            <li className="section--item">
              <div className="section--time-line">
                <i className="section--time-line-dot" />
              </div>
              <div className="section--time-line-hide-overlay" />
              <div className="section--heading-group">
                <div className="section--date">2020</div>
                <div className="section--heading">
                  <h3>Problem Solving (Basic)</h3>
                </div>
              </div>
              <div className="section--content">
                <p>
                  Abarca temas básicos de estructuras de datos (como matrices,
                  cadenas) y algoritmos (como ordenación y búsqueda).
                </p>
              </div>
            </li>
            <li className="section--item">
              <div className="section--time-line">
                <i className="section--time-line-dot" />
              </div>
              <div className="section--time-line-hide-overlay" />
              <div className="section--heading-group">
                <div className="section--date">2020</div>
                <div className="section--heading">
                  <h3>Programación con Java Standard (6.ª edición)</h3>
                </div>
              </div>
              <div className="section--content">
                <p>
                  Este curso está diseñado para gente que nunca se había
                  planteado programar, pero quiere empezar. En este curso
                  aprenderás la sintaxis del lenguaje Java y a utilizar las
                  clases más importantes de la edición Java Standard Edition.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
