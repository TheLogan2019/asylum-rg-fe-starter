import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>
      {/* Start of Graphs Section. "graphs-section" div contains divs for each graph and caption */}
      <div className="graphs-section">
        <div className="graph-container">
          <img
            className="graph"
            src={GrantRatesByOfficeImg}
            alt="Grant Rates by Office"
          />
          <p className="graph-notes">Search Grant Rates By Office </p>
        </div>
        <div className="graph-container">
          <img
            className="graph"
            src={GrantRatesByNationalityImg}
            alt="Grant Rates by Nationality"
          />
          <p className="graph-notes">Search Grant Rates By Nationality </p>
        </div>
        <div className="graph-container">
          <img
            className="graph"
            src={GrantRatesOverTimeImg}
            alt="Grant Rates Over Time"
          />
          <p className="graph-notes">Search Grant Rates Over Time </p>
        </div>
      </div>
      {/*End of Graphs Section */}
      {/*Start of Button Section. "upper-button-container div created to hold existing and new button.*/}
      <div className="upper-button-container">
        <div className="view-more-data-btn-container">
          <Button
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            onClick={() => history.push('/graphs')}
          >
            View the Data
          </Button>
        </div>
        <div className="download-the-data-btn-container">
          <Button
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          >
            Download the Data
          </Button>
        </div>
      </div>
      {/*End of upper button section */}
      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      {/*H2 created to house the Systemic caption */}
      <h2 className="systemic-heading">Systemic Disparity Insights</h2>

      {/* Start of Bottom Section. "Bottom-section" div created to house the section heading and text divs */}
      <div className="bottom-section">
        <div className="section-container">
          <h2 className="section-heading">36%</h2>
          <p className="section-text">
            By the end of the Trump administration, the average asylum office
            grant rate had fallen 36 percent from an average of 44 percent in
            fiscal year 2016 to 28 percent in fiscal year 2020.
          </p>
        </div>
        <div className="section-container">
          <h2 className="section-heading">5%</h2>
          <p className="section-text">
            The New York asylum office grant rate dropped to 5 percent in fiscal
            year 2020.
          </p>
        </div>
        <div className="section-container">
          <h2 className="section-heading">6x Lower</h2>
          <p className="section-text">
            Between fiscal year 2017 and 2020, the New York asylum office's
            average grant rate was six times lower than the San Francisco asylum
            office.
          </p>
        </div>
      </div>
      {/*end of bottom section */}
      {/*read more Button created with same parameters as previous buttons */}
      <div className="read-more-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
        >
          Read More
        </Button>
      </div>
      <div>
        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
