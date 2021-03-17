import React from 'react';
import {EuiSuperDatePicker, EuiDatePicker} from '@elastic/eui'
import './App.css';
import moment from 'moment';

function App() {
  const handleTimeChange = () => {}
  const [startDate, setStartDate] = React.useState<moment.Moment>(moment()); 
   return (
    <div className="App">
      <div>
        <EuiSuperDatePicker onTimeChange={handleTimeChange}/>
      </div>
      <br/>
      <div>
        <EuiDatePicker
          showTimeSelect
          selected={startDate}
          onChange={(date) => date && setStartDate(date)}
        />
      </div>

    </div>
  );
}

export default App;
