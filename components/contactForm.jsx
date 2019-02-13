const contacts = [
  {
      id: 1,
      firstName: 'Jan',
      lastName: 'Nowak',
      email: 'jan.nowak@example.com',
  },
  {
      id: 2,
      firstName: 'Adam',
      lastName: 'Kowalski',
      email: 'adam.kowalski@example.com',
  },
  {
      id: 3,
      firstName: 'Zbigniew',
      lastName: 'Koziol',
      email: 'zbigniew.koziol@example.com',
  }
];

const contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

ContactForm = React.createClass({

  render: function() {
    return (
        <form className = {'contactForm'}>
          <input type = {'text'} placeholder = {'Imie'} value = {this.props.contact.firstName}></input>
          <input type = {'text'} placeholder = {'Nazwisko'} value = {this.props.contact.lastName}></input>
          <input type = {'email'} placeholder = {'Email'} value = {this.props.contact.email}></input>
          <button type = {'submit'}>Dodaj kontakt</button>
        </form>
    );
  }
});

