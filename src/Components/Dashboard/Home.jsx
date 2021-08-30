import React, { Component } from "react";
import styles from "./Home.module.css";
import { fetchData } from "../../api/index";
import coronaImage from "../../images/image.png";
import theme from "../../images/logo.png";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";
import BasicTable from "../Tables/Table";
import Footer from "../Footer/Footer";
import { Button } from "@material-ui/core";
import Header from "../Header/Header";

export class Home extends Component {
  state = {
    data: {},
    country: "",
    table: true
  };
  async componentDidMount() {
    console.log("fetching data");
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async country => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  handleButton = () => {
    this.setState({
      table: !this.state.table
    });
  };

  handleButton = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("password");
    this.props.history.push({
      pathname: "/",
      state: {
        success: true
      }
    });
  };

  render() {
    console.log("data", this.state.data);
    const { data, country } = this.state;
    if (localStorage.getItem("user") !== "user") {
      this.props.history.push({
        pathname: "/",
        state: {
          success: true
        }
      });
    }
    return (
      <>
        <Header handleButton={this.handleButton} />
        <div className={styles.container}>
          <img className={styles.theme} src={theme} alt="COVID-19" />
          <img className={styles.image} src={coronaImage} alt="COVID-19" />
          <br />
          <text>
            <b>Global and Country Wise Cases of Corona Virus</b>
          </text>
          <br />
          <text>
            <i>(For a Particular country, select a Country from below)</i>
          </text>
          <br />
          <br />
          <Filter handleCountryChange={this.handleCountryChange} />
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleButton}
            style={{ marginBottom: "10px" }}
          >
            see in&nbsp;
            {this.state.table ? "table" : "grid"}&nbsp; format
          </Button>
          {!this.state.table ? (
            <BasicTable data={data} country={country} />
          ) : (
            <Cards data={data} country={country} />
          )}

          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
