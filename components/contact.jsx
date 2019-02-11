const Contact = React.createClass({

  render: function () {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'http://chittagongit.com//images/contacts-icon-png/contacts-icon-png-8.jpg'} />
        <p className={'contactLabel'}>{this.props.item.firstName}</p>
        <p className={'contactLabel'}>{this.props.item.lastName}</p>
        <a className={'contactEmail'} href={this.props.item.email}>{this.props.item.email}</a>
      </div>
    );
  }
});
