const header = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired, // name of link
        url: React.PropTypes.string.isRequired // url of link
    },

    render: function() {
        return React.DOM.li(null,
            React.DOM.a({
                href: this.props.url,
                className: ''
            }, this.props.name)
        );
    }
});

ReactDOM.render(React.DOM.div({
    className: 'container'
    }, React.DOM.div({
        className: 'header_body'
    }, React.DOM.a({
        className: 'logo',
        href: '/'
    }, React.DOM.img({
        src: './img/logo.png',
        alt: ''
    }), React.DOM.p({
        className: 'logoText'
    }, 'MonoGDPS')), React.DOM.div({
        className: 'hamburger',
        id: 'hamburger'
    }, React.DOM.span(null)), React.DOM.nav({
        className: 'header_menu',
        id: 'menu'
    }, React.DOM.ul({
        className: 'header_list'
    }, 
        React.createElement(header, {
            name: 'Home',
            url: '/'
        }),
        React.createElement(header, {
            name: 'Download',
            url: 'https://gofruit.space/gdps/00Wy'
        }),
        React.createElement(header, {
            name: 'Lists',
            url: './lists.html'
        }),
        React.createElement(header, {
            name: 'Contacts',
            url: './contacts.html'
        }),
    )))), document.getElementById('header')
);