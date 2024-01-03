import React, { useState, useEffect } from 'react';
import './IndexComponent.css';

function formatDate(date) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // const day = date.getDate();
  // const monthIndex = date.getMonth();
  // const year = date.getFullYear();

  // return `${monthNames[monthIndex]} ${day} ${year}`;

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function IndexComponent() {
  const [entryDate, setEntryDate] = useState('');
  const [exitDate, setExitDate] = useState('');
  const [today, setToday] = useState(new Date());
  const [sixMonthsAgo, setSixMonthsAgo] = useState(new Date());
  const [trips, setTrips] = useState([]);
  const [totalDays, setTotalDays] = useState(0);
  const [allowFuture, setAllowFuture] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    const now = new Date();
    setToday(now);

    const sixMonthsAgoDate = new Date(now);
    sixMonthsAgoDate.setDate(sixMonthsAgoDate.getDate() - 180);
    setSixMonthsAgo(sixMonthsAgoDate);
  }, []);

  const formattedDate = formatDate(today);
  const formattedSixMonthsAgo = formatDate(sixMonthsAgo);

  const addTrip = () => {
    if (!entryDate || !exitDate) {
      alert('Please select both entry and exit dates.');
      return;
    }

    const entryDateObj = new Date(entryDate);
    const exitDateObj = new Date(exitDate);
    if (exitDateObj <= entryDateObj) {
      alert('Exit date must be after entry date.');
      return;
    }

    const dateDifference =
      Math.abs(exitDateObj - entryDateObj) / (1000 * 60 * 60 * 24) + 1;

    const selectedCountry =
      document.querySelector('.country-select select').value || 'Not specified';

    const newTrip = {
      entryDate: entryDate,
      exitDate: exitDate,
      dateDifference: dateDifference,
      country: selectedCountry || 'Not specified',
    };

    const updatedTrips = [...trips, newTrip];
    setTrips(updatedTrips);
    setEntryDate('');
    setExitDate('');
    setSelectedCountry('');

    const newTotalDays = updatedTrips.reduce(
      (acc, trip) => acc + trip.dateDifference,
      0
    );
    setTotalDays(newTotalDays);
  };

  const countries = [
    'Austria',
    'Belgium',
    'Croatia',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Italy',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Malta',
    'Netherlands',
    'Norway',
    'Poland',
    'Portugal',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden',
    'Switzerland',
  ];

  return (
    <div className="index">
      <h2>Schengen Visa Calculator</h2>
      <h3>Usage</h3>
      <p>
        Many visitors to the Schengen Area are allowed 90 days of free travel
        within the previous 180 day period. I've made this handy calculator to
        avoid overstaying your visa and keeping track of the days you can stay.
      </p>
      <p>
        Here's a friendly reminder of the countries that entered into the
        Schengen Agreement: Austria, Belgium, Croatia, Czech Republic, Denmark,
        Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy,
        Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands,
        Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden,
        Switzerland.
      </p>

      <div className="date-info-div">
        <p>
          <strong>Today's Date:</strong>{' '}
          <span className="date-span">{formattedDate}</span>
        </p>
        <p>
          <strong>180 Days Ago:</strong>{' '}
          <span className="date-span">{formattedSixMonthsAgo}</span>
        </p>
      </div>

      <div className="date-inputs">
        <div className="date-wrapper">
          <input
            type="date"
            value={entryDate}
            onChange={(e) => setEntryDate(e.target.value)}
            min={formattedSixMonthsAgo}
            // max={allowFuture ? null : formatDate(new Date())}
            max={
              allowFuture
                ? formatDate(new Date(9999, 11, 31))
                : formatDate(today)
            }
          />
        </div>

        <div className="date-wrapper">
          <input
            type="date"
            value={exitDate}
            onChange={(e) => setExitDate(e.target.value)}
            min={formattedSixMonthsAgo}
            // max={allowFuture ? null : formatDate(new Date())}
            max={
              allowFuture
                ? formatDate(new Date(9999, 11, 31))
                : formatDate(today)
            }
          />
        </div>

        <div className="date-wrapper">
          <button onClick={addTrip}>Add trip</button>
        </div>
      </div>

      <div className="country-select">
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">Select a country (optional)</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {/* <div className="country-select">
        <select defaultValue="">
          <option value="" disabled>
            Select a country (optional)
          </option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div> */}

      <div className="future-option">
        <input
          type="checkbox"
          id="allowFuture"
          checked={allowFuture}
          onChange={() => setAllowFuture(!allowFuture)}
        />
        <label htmlFor="allowFuture">Allow selecting future dates</label>
      </div>

      <div className="display-text">
        <h3>Entry date: {entryDate}</h3>
        <h3>Exit date: {exitDate}</h3>
      </div>

      {/* saved trips table */}
      <div className="saved-trips">
        <h3 class="saved-trips-head">Saved Trips</h3>
        <table>
          <thead>
            <tr>
              <th>Trip #</th>
              <th>Entry Date</th>
              <th>Exit Date</th>
              <th>Days</th>
              <th>Country</th> {/* Header for the country column */}
            </tr>
          </thead>
          <tbody>
            {trips.map((trip, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{trip.entryDate}</td>
                <td>{trip.exitDate}</td>
                <td>{trip.dateDifference}</td>
                <td>{trip.country}</td> {/* Display the country */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="total-days">
        <h3>Total Days in Schengen: {totalDays}</h3>
      </div>
    </div>
  );
}

export default IndexComponent;
