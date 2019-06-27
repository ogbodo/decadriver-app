import React from 'react';

function DriverPage() {
  return (
    <>
      <main>
        <section>
          <div className="container-fluid">
            <div className="row">
              <Master />
              <Detail />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Master(props) {
  const titleCollection = [
    'first',
    'second',
    'third',
    'first',
    'second',
    'third',
  ];

  const titles = titleCollection.map((key, index) => (
    <li className="headline-text" key={index} onClick={props.onItemClicked}>
      {key}
    </li>
  ));

  return (
    <div class="col-2">
      <ul id="headlines">{titles}</ul>
    </div>
  );
}

function Detail(props) {
  return (
    <div className="col" id="headline-details">
      <h3>{props.details}</h3>
    </div>
  );
}
export default DriverPage;
