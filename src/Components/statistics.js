import React, { useState } from "react";
import { Select } from "antd";
import BarChart from "./barChart";
import axios from "axios";

const { Option } = Select;

const CountryStatistics = ({ resource }) => {
  const countries = resource.countries.read();
  const [flag, setFlag] = useState(false);
  const [countryData, setCountryData] = useState();

  const RenderCountries = countries.map((country) => {
    return (
      <Option key={country.name} value={country.name}>
        {country.name}
      </Option>
    );
  });

  const getStatisticsByCountry = async (country) => {
    const _data = await axios.get(
      `https://covid19.mathdro.id/api/countries/${country}`
    );
    setCountryData({
      labels: ["Infected", "Recovered", "Deaths"],
      datasets: [
        {
          label: "# of Peoples",
          data: [
            _data.data.confirmed.value,
            _data.data.recovered.value,
            _data.data.deaths.value,
          ],
          backgroundColor: [
            "rgba(213, 244, 246, 1)",
            "rgba(224, 243, 223, 1)",
            "rgba(255, 229, 228, 1)",
          ],
          borderColor: [
            "rgba(213, 244, 246, 1)",
            "rgba(224, 243, 223, 1)",
            "rgba(255, 229, 228, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
    setFlag(true);
  };

  function handleChange(value) {
    getStatisticsByCountry(value);
  }

  return (
    <div className="CountryContainer">
      <h2>Select Country</h2>
      <Select
        defaultValue="Choose country"
        style={{ width: 500 }}
        onChange={handleChange}
      >
        {RenderCountries}
      </Select>
      {!flag && <h2>Global Summary</h2>}

      <BarChart resource={resource} flag={flag} Data={countryData} />
    </div>
  );
};

export default CountryStatistics;
