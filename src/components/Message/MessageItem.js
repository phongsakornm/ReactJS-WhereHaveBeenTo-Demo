import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class MessageItem extends Component {
  constructor(props) {
    super(props);

    this.onClickDelete = this.onClickDelete.bind(this);

    this.onChange = this.onChange.bind(this);
    this.updateFunction = this.updateFunction.bind(this);
    this.state = {
      modalState: false,
      messageUpdate: props.message
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      return { modalState: newState };
    });
  }

  updateFunction(e) {
    e.preventDefault();
    var obj = { message: this.state.messageUpdate };
    let dbCon = this.props.db.database().ref("/messages" + this.props.msgId);
    dbCon
      .child(this.props.msgKey)
      .update(obj)
      .then(() => this.toggleModal());
  }

  onChange(e) {
    this.setState({
      messageUpdate: e.target.value
    });
  }

  onClickDelete(e) {
    e.preventDefault();
    let dbCon = this.props.db.database().ref("/messages" + this.props.msgId);
    dbCon.child(this.props.msgKey).remove();
  }

  render() {
    return (
      <div>
        {this.props.name} | {this.props.message}
        
        <Button variant="outline-secondary" style={deleteBtnStyle} onClick={this.toggleModal}>
          แก้ไข
        </Button>
        <Modal
          updateFunction={this.updateFunction}
          onClickDelete={this.onClickDelete}
          closeModal={this.toggleModal}
          modalState={this.state.modalState}
          title="แก้ไขความคิดเห็น"
        >
          <table>
            <tr>
              <td>ข้อความ</td>
              <td>
                <textarea
                  className="textarea"
                  placeholder="Comment"
                  cols="100"
                  onChange={this.onChange}
                  value={this.state.messageUpdate}
                />
              </td>
            </tr>
          </table>
        </Modal>
      </div>
    );
  }
}

const Modal = ({ children, updateFunction, onClickDelete, closeModal, modalState, title }) => {
  if (!modalState) {
    return null;
  }
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">{children}</div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={updateFunction}>
            บันทึกแก้ไข
          </button>
          <button className="button is-danger" onClick={onClickDelete}>
            ลบ
          </button>
          <button className="button" onClick={closeModal}>
            ยกเลิก
          </button>
        </footer>
      </div>
    </div>
  );
};

const deleteBtnStyle = {
  float: "right"
};

export default MessageItem;
