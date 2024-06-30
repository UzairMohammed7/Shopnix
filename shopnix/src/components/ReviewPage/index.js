import "./index.css";

const ReviewPage = () => (
  <>
    <div className="top-container">
      <h1>WELCOME TO YOUR NEW STORE!</h1>
      <div className="content">
        <div className="left">
          <img src="https://via.placeholder.com/140" alt="Store-Image" />
          <p>
            We have set up your store with some sample data and default
            settings. This lets you get a feel of your store and the store
            manager. Using the steps on the right, you can configure your store
            with your data and your settings. Click on the first step to start.
          </p>
          <p>
            If you have any queries, please contact us on support@shopnix.in
          </p>
        </div>
        <div className="right">
          <div className="steps-header">
            <p>4 of 7 Steps completed</p>
          </div>
          <ul className="steps-list">
            <li className="completed">Choose & Customise Theme</li>
            <li className="completed">Setup Shop Profile & Domain</li>
            <li className="completed">Setup Categories</li>
            <li className="completed">Setup Products</li>
            <li>Setup Widgets</li>
            <li>Setup Static Pages</li>
            <li>Choose Locations</li>
            <li>DONE</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="bottom-container">
      <header>
        <h1>Dashboard</h1>
        <div className="date-filter">
          <input type="date" id="start-date" />
          <p>to</p>
          <input type="date" id="end-date" />
          <button>Go</button>
        </div>
      </header>

      <main>
        <div className="card summary">
          <h2>Summary</h2>
          <div className="card-content">
            <div className="card-border">
              <p className="card-content-bg">Today's Sales</p>
              <p>Rs. 0.00</p>
            </div>
            <div className="card-border">
              <p className="card-content-bg">Total Sales</p>
              <p>Rs. 0.00</p>
            </div>
          </div>
        </div>
        <div className="card sales-chart">
          <h2>Sales between 24 May and 23 Jun</h2>
          <div className="card-content-sales-list">
            <p>Sales</p>
            <p>1.0__________________________________________</p>
            <p>0.5__________________________________________</p>
            <p>0.0__________________________________________</p>
          </div>
        </div>
        <div className="card current-orders">
          <h2>Current Orders</h2>
          <div className="card-content">
            <table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Order ID</th>
                  <th>Amount</th>
                  <th>Ordered Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="4">No data</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card top-products">
          <h2>Top 5 Selling Products between 24 May and 23 Jun</h2>
          <div className="card-content">
            <p>No data</p>
          </div>
        </div>
      </main>
    </div>
  </>
);

export default ReviewPage;
