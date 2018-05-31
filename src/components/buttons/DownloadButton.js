import React from 'react'
import ActionButton from './ActionButton'

function saveAs(uri, filename) {
  var link = document.createElement('a')

  document.body.appendChild(link)
  link.download = filename
  link.href = uri
  link.click()
  document.body.removeChild(link)
}

class DownloadButton extends React.Component {
  state = {
    loading: false,
    fileData: null
  }

  onGenerate = () => {
    this.setState({ loading: true, fileData: null })
    this.props.genFile(this.donePreparing)
  }

  donePreparing = (fileData) => {
    this.setState({
      loading: false,
      fileData: fileData
    })
    console.log(this.state, this.props)
  }

  onDownload = () => {
    var fileData =
      this.props.fileData ||
      (this.props.async ? this.state.fileData : this.props.genFile())

    if (!fileData) {
      return false
    }
    var blob = new Blob([fileData.contents], { type: fileData.mime })
    var url = URL.createObjectURL(blob)
    saveAs(url, fileData.filename)
    this.props.onDownloaded && this.props.onDownloaded()
  }

  render() {
    if (!this.props.genFile && !this.props.fileData) {
      return <em>Invalid configuration for download ActionButton</em>
    }

    if (this.props.fileData || !this.props.async || this.state.fileData) {
      var title = this.props.downloadTitle

      if ('function' === typeof title) {
        title = title(this.props.fileData || this.state.fileData)
      }

      return <ActionButton onClick={this.onDownload} text={title} />
    }

    if (this.state.loading) {
      return <ActionButton text={this.props.loadingTitle} />
    }

    return (
      <ActionButton onClick={this.onGenerate} text={this.props.generateTitle} />
    )
  }
}

DownloadButton.defaultProps = {
  async: false,
  downloadTitle: 'Download',
  generateTitle: 'Generate file',
  loadingTitle: 'Loading...'
}

export default DownloadButton
