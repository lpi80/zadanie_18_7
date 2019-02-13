/*const contacts = [
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


const ContactForm = React.createClass({

    render: function () {
        return (
            <form className={'contactForm'}>
                <input type={'text'} placeholder={'Imie'} value={this.props.contact.firstName}></input>
                <input type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName}></input>
                <input type={'email'} placeholder={'Email'} value={this.props.contact.email}></input>
                <button type={'submit'}>Dodaj kontakt</button>
            </form>
        );
    }
});


const Contact = React.createClass({

    render: function () {
        return (
            <div className={'contactItem'}>
                <img className={'contactImage'} src={'components/kontakt.png'} />
                <p className={'contactLabel'}>{this.props.item.firstName}</p>
                <p className={'contactLabel'}>{this.props.item.lastName}</p>
                <a className={'contactEmail'} href={this.props.item.email}>{this.props.item.email}</a>
            </div>
        );
    }
});

const Contacts = React.createClass({

    render: function () {
        let contacts = this.props.items.map(function (contact) {
            return <Contact item={contact} key={contact.id} />
        });

        return (
            <ul className={'contactsList'}>{contacts}</ul>
        );
    }
});

const App = React.createClass({
    render: function () {
        return (
            <div className={'app'}>
                <ContactForm contact={contactForm} />
                <Contacts items={contacts} />
            </div>
        )
    }
});
*/
const app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));
