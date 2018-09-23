import React, { Component } from 'react';
import { Card, Slider, Checkbox, Input, Radio, Button } from 'antd';
import request from 'superagent';
import getWeb3 from './getWeb3';

const CheckboxGroup = Checkbox.Group;
const { TextArea } = Input;
const RadioGroup = Radio.Group;

const plainOptions = ['KLIPSCH', 'PIONEER', 'SHURE', 'GRADO'];

export default class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      web3: null,
      web3error: null,
      account: null,
      listenerInterval: null,
      familiarity: 0,
      comesToMind: '',
      checkedValues: [],
      peonyBool: '',
      peonyfamiliar: '',
      store: '',
      disable: true,
    };
  }

  componentDidMount() {
  /* Gets web3 instance from the browser */
    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })
    })
    .catch(error => {
      this.setState({
        web3error: error.error
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.web3 !== null
      && this.state.listenerInterval === null
    ) {
      const listenInterval = setInterval(this.accountListener, 2000)
      this.setState({ listenerInterval: listenInterval })
      console.log('LISTENER fired')
    }
    // check that all values are not null -> set disable to false
    // cheat
    if (this.state.store !== '' && this.state.disable === true) {
      this.setState({ disable: false })
    }
  }

  accountListener = () => {
    if (this.state.web3.eth.accounts[0] !== this.state.account) {
      this.setState({ account: this.state.web3.eth.accounts[0] })
      console.log('THIS.STATE.WEB3.ETH.ACCOUNTS[0]', this.state.web3.eth.accounts[0])
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.listenerInterval)
  };

  onCheckboxChange = (checkedValues) => {
    // console.log('checked = ', checkedValues);
    this.setState({ checkedValues });
  };

  handleSliderChange = value => {
    this.setState({ familiarity: value })
  }

  handleRadioChange = event => {
      this.setState({ peonyBool: event.target.value })
  };

  handleRadio2Change = event => {
      this.setState({ peonyfamiliar: event.target.value })
  };

  handleTextChange = event => {
  // if (this.state[event.target.id] !== undefined) {
    console.log('id', event.target.id)
    this.setState({ [event.target.id]: event.target.value })
  // }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // get data from state
    request
      .post('https://tricky-stingray-33.localtunnel.me/webhook/forms')
      .send({
        account: this.state.account,
        familiarity: this.state.familiarity,
        comesToMind: this.state.comesToMind,
        checkedValues: this.state.checkedValues,
        peonyBool: this.state.peonyBool,
        peonyfamiliar: this.state.peonyfamiliar,
        store: this.state.store,
      })
      .end((err, res) => {
        if (err) {
          console.log(err);
          console.log(res);
          this.setState({ error: res.error.status })
        } else {
          console.log(res);
          // close form
        }
      })
  }

  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>

        <Card title="AdPay Marketer Survey" bordered={false} style={{ width: 800 }}>

          { this.state.web3error &&
            <h2 className="warning-color" style={{ color: 'orange' }} >{this.state.web3error}</h2>
          }

          { this.state.account === null ||
            this.state.account === undefined &&
            <h2 className="warning-color" style={{ color: 'orange' }} >Please log in to MetaMask.</h2>
          }

          {/* <h1>AdPay Marketer Survey</h1> */}

          <br />
          {/* <hr /> */}
          <br />

          <h2>How familiar are you with headphone brands?</h2>
          <p>Remember that there are no right or wrong answers. We'd just like to hear your honest opinion.</p>
          {/* 1 - n boxes, slider */}
          <Slider
            value={this.state.familiarity}
            onChange={this.handleSliderChange}
            min={0}
            max={6}
          />

          <br />
          {/* <hr /> */}
          <br />

          <h2>When you think of headphones, what brands come to mind?</h2>
          <TextArea id="comesToMind" onChange={this.handleTextChange} placeholder="Type your answer here..." autosize />
          <p>SHIFT + ENTER to make a line break</p>

          <br />
          {/* <hr /> */}
          <br />

          <h2>Which of the following brands have you heard of?</h2>
          <p></p>
          <div>
            <CheckboxGroup options={plainOptions} onChange={this.onCheckboxChange} />
          </div>

          <br />
          {/* <hr /> */}
          <br />

          <h2>Have you heard of the brand Peony before?</h2>
          <RadioGroup htmlId="peonyBool" onChange={this.handleRadioChange} value={this.state.peonyBool}>
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </RadioGroup>

          <br />
          {/* <hr /> */}
          <br />

          <h2>How familiar are you with the brand Peony?</h2>
          <Radio.Group id="peonyfamiliar" onChange={this.handleRadio2Change} value={this.state.peonyfamiliar} buttonStyle="solid">
            <Radio.Button value={1}>1</Radio.Button>
            <Radio.Button value={2}>2</Radio.Button>
            <Radio.Button value={3}>3</Radio.Button>
            <Radio.Button value={4}>4</Radio.Button>
            <Radio.Button value={5}>5</Radio.Button>
            <Radio.Button value={6}>6</Radio.Button>
          </Radio.Group>

          <br />
          {/* <hr /> */}
          <br />

          <h2>What was the last store that you purchased headphones from?</h2>
          <Input id="store" onChange={this.handleTextChange} value={this.state.store} />

          <br />

          { this.state.account === null ||
            this.state.account === undefined ||
            this.state.disable === true ?
              <div style={{ margin: 50 }}>
                {/* <div className="text-danger">Please log in to MetaMask.</div> */}
                <Button type="primary" disabled>Submit</Button>
              </div>
            :
              <div style={{ margin: 50 }}>
                <Button type="primary" onClick={this.handleSubmit}>Submit</Button>
              </div>
            }

        </Card>

      </div>
    );
  }

}
