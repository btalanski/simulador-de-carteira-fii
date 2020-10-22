module.exports = {
    purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
    theme: {
        minWidth: {
            0: '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            full: '100%',
        },
        extend: {
            screens: {
                xs: { max: '400px' },
            },
        },
    },
};