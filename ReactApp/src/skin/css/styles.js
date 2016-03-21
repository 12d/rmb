var styles = {
    header: {
        flexDirection: 'row',
        height: 44,
        backgroundColor: '#099fde',
        justifyContent:'center'
    },
    leftWrap: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center'
    },
    rightWrap: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row'

    },
    midWrap: {
        flex: 2,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftButton: {
        alignSelf: 'center'
    },
    rightButton: {
        alignSelf: 'flex-end'
    },
    headerTitle: {
        color: '#fff',
        fontSize: 14
    },
    headerSubTitle: {
        fontSize: 12
    }
}
module.exports = styles;
