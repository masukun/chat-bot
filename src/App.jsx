import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList, Chats } from './components/index';
import { TransferWithinAStationRounded } from '@material-ui/icons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
    this.selectAnswer = this.selectAnswer.bind(this)
  }

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  }

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case (nextQuestionId === "init"):
        setTimeout(this.displayNextQuestion(nextQuestionId), 1000);
        break;

      case (/^https:*/.test(nextQuestionId)):
        const a = document.createElement("a");
        a.href = nextQuestionId;
        //別タブに移動
        a.target = "blank";
        a.click();
        break;

      default:
        /**連想配列chatsを生成 */
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: 'answer'
        });

        setTimeout(this.displayNextQuestion(nextQuestionId), 1000);
        break;
    }
  }

  /**初期のコンポーネントがレンダリングされた後に副作用をつけるもの */
  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId);
  }

  componentDidUpdate() {
    const scrollArea = document.getElementById('scroll-area')
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} select={this.selectAnswer} />
        </div>
      </section>
    );
  }
}


