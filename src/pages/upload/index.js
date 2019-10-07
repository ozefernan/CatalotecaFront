import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';
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
    /*this.setState ({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });*/
    files.forEach(this.processUpload);
  };

  /*updateFile = (data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return data === uploadedFile.data
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      })
    });
  };*/

  processUpload = file => {
    const data = new FormData();
    data.append('file', file);

    api.post("upload", data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
        /*onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          this.updateFile(uploadedFile.data, {
            progress
          });
        }*/
      })
      .then(response => {
        this.processCalculate(response);

      })
      .catch(error => {
        console.log(error)
        /*this.updateFile(uploadedFile.id, {
          error: true
        });*/
      })
  };

  processCalculate = response => {
    api.post("similarity", response.data, {
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error)
    })
  }

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
