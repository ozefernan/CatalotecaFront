import React, { Component } from 'react';
import api from "../../shared/services/api";

import { Styles } from './styles';
import Sidebar from '../homeAdmin/components/sideBar';
import Topbar from '../homeAdmin/components/topbar';
import Footer from '../components/footer';
import Scrolltop from '../components/scrollTop';
import Upload from './components/uploadCard';

export default class upload extends Component {
  state = {
    uploadedFiles: [],
  };

  handleUpload = files => {
    files.forEach(this.processUpload);
  };

  processUpload = files => {
    const data = new FormData();
    data.append('file', files);

    api.post("upload", data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }})
      .then(response => {
        console.log(response);
        response = this.props;
      })
      .catch(error => {
        console.log(error)
      })
  };

  render () {
    const { uploadedFiles } = this.state;
    const length = uploadedFiles.length;

    return (
      <Styles>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div is="content">
              <Topbar />
              <Upload onUpload={this.handleUpload} files={uploadedFiles} file={length}/>
            </div>
          </div>
        </div>
        <Footer />
        <Scrolltop />
      </Styles>
    );
  }
}
