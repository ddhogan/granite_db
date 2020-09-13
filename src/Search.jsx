import React, { useState, useEffect } from 'react';

const endpoint = "https://api.airtable.com/v0/appKaS04kvws26FKE/Community%20Connections%20Database"

function Search() {
  const [setErrors] = useState(false);
  const [data, setData] = useState({items: []});

  useEffect(() => {
    const fetchData = async () => { 
      fetch(endpoint, {
        headers: { 'Authorization': 'Bearer ' + process.env.REACT_APP_API_KEY }
      })
        .then(response => response.json())
        .then(response => setData({ items: response.records }))
        .catch((error) => {
          setErrors({ hasError: true })
          console.log(error)
        })
      }
      fetchData()
    }, [setErrors])

  return (
    <div id="search-results">
      <ul>
        {
          (data.items.map(item => (
            (item.fields["Is your organization willing to share your Membership Contact information with other organizations/the public when providing disaster assistance?"].includes("Yes")) ?
            <li key={item.id}>
              <p><a href={`https://${item.fields["Organization Website"]}`} rel="noopener noreferrer">{item.fields["Name of organization"]}</a>
               - 
              <a href={item.fields["Organization Phone Number"]}>{item.fields["Organization Phone Number"]}</a></p>
            </li>
            : null
          )))
        }
      </ul>
    </div>
  )
}

export default Search;