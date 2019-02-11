const Contact = React.createClass({
 
   render: function () {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'http://chittagongit.com//images/contacts-icon-png/contacts-icon-png-8.jpg'} />
        <p className={'contactLabel'}>this.props.item.firstName</p>
        <p className={'contactLabel'}>this.props.item.lastName</p>
        <a className={'contactEmail'} href={'this.props.item.email'}>this.props.item.email</a>
      </div>
    );
  }
});


/*
const Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },

    render: function() {
      return (
        React.createElement('div', {className: 'contactItem'},
          React.createElement('img', {
            className: 'contactImage',
            src: 'http://chittagongit.com//images/contacts-icon-png/contacts-icon-png-8.jpg'
          }),
          React.createElement('p', {className: 'contactLabel'}, this.props.item.firstName),
          React.createElement('p', {className: 'contactLabel'}, this.props.item.lastName),
          React.createElement('a', {className: 'contactEmail', href: this.props.item.email},
            this.props.item.email
          )
        )
      )
    },
  });
  */