import React from 'react';
import styles from 'components/FAQ/FAQ.scss';

export default class FAQ extends React.Component {

  render() {
    return (
      <div className={styles.faq}>
      <table border="1" border="1px solid black" border-collapse="collapse" cellspacing="4" cellpadding="4">
          <tr>
            <th height="50px">Question</th>
            <th height="50px">Answer</th>
          </tr>
          <tr>
            <td className={styles.faq.tdl}>Where is hackCWRU?</td>
            <td className={styles.faq.tdr}>Case Western Reserve University, think[box] center</td>
          </tr>
          <tr>
            <td className={styles.faq.tdl}>When is hackCWRU?</td>
            <td className={styles.faq.tdr}>Mid February</td>
          </tr>
          <tr>
            <td className={styles.faq.tdl}>How do I get to hackCWRU</td>
            <td className={styles.faq.tdr}>We will be offering busses to nearby universities, and travel reimbursement.</td>
          </tr>
          <tr>
            <td className={styles.faq.tdl}>What can I do at hackCWRU?</td>
            <td className={styles.faq.tdr}>Build something! Code, hardware, anything.</td>
          </tr>
        </table>


      </div>
    )
  }

  }
