import React from 'react';

export default function Component(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mt-5">
          <div className="card-body">
            <h6 className="card-title text-muted text-uppercase text-center">
              {props.subscription}
            </h6>
            <h6 className="card-price text-center">
              ${props.price}
              <span className="month">/month</span>
            </h6>
            <hr />
            <ul>
              <li>
                {props.facheck}
                <span className="text" style={props.style}>
                  {props.users}
                </span>
              </li>
              <li>
                {props.facheck}
                <span className="text">{props.storage}GB Storage</span>
              </li>
              <li>
                {props.facheck}
                <span className="text">Unlimited Public Projects</span>
              </li>
              <li>
                {props.facheck}
                <span className="text">Community Access</span>
              </li>
              <li className={props.pprojects}>
                {props.privateProjects}
                <span className="text">Unlimited Private Projects</span>
              </li>
              <li className={props.phoneSupport}>
                {props.privateProjects}
                <span className="text">Dedicated Phone Support</span>
              </li>
              <li className={props.subDomain}>
                {props.privateProjects}
                <span className="text">
                  {props.unlimited}Free Subdomain{props.s}
                </span>
              </li>
              <li className={props.sreports}>
                {props.reports}
                <span className="text">Monthly Status Reports</span>
              </li>
            </ul>
            <a
              href="#"
              className="btn btn-block btn-primary text-uppercase text-center"
            >
              Button
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
