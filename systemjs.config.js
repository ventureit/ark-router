(function (global) {
    System.config({
        compilerOptions: {
            target: 'esnext',
            module: 'commonjs',
            jsx: 'react',
            jsxFactory: 'h',
            jsxFragmentFactory: 'Fragment',
        },
        transpiler: 'ts',
        typescriptOptions: {
            module: 'system',
            moduleResolution: 'node',
            target: 'es2015',
            noImplicitAny: false,
            sourceMap: true,
            jsx: 'react',
            lib: ['es2015', 'dom'],
        },
        paths: {
            // paths serve as alias
            'npm:': 'https://cdn.jsdelivr.net/npm/',
            ...systemJsPaths,
        },
        map: {
            css:
                (boilerplatePath.length === 0 ? `./` : `${boilerplatePath}/`) +
                'css.js',
            // 'css': 'npm:systemjs-plugin-css@0.1.37/css.js',

            // react
            react: 'npm:react@18.2.0',
            'react-dom': 'npm:react-dom@18.2.0',
            'react-dom/client': 'npm:react-dom@18.2.0',
            redux: 'npm:redux@4.2.1',
            'react-redux': 'npm:react-redux@8.0.5',
            'prop-types': 'npm:prop-types@15.8.1',

            ts: 'npm:plugin-typescript@8.0.0/lib/plugin.js',
            typescript: 'npm:typescript@4.3.5/lib/typescript.min.js',

            app: appLocation,
            // systemJsMap comes from index.html
            ...systemJsMap,
        },
        packages: {
            css: {},
            react: {
                main: './umd/react.production.min.js',
            },
            'react-dom': {
                main: './umd/react-dom.production.min.js',
            },
            'react-dom/server': {
                main: '../umd/react-dom-server.browser.production.min.js',
            },
            app: {
                main: './index.tsx',
                defaultExtension: 'tsx',
            },
            '@ag-grid-community/react': {
                main: './dist/package/index.cjs.js',
                defaultExtension: 'js',
                format: 'cjs',
            },
            '@ag-grid-community/core': {
                format: 'cjs',
            },
            '@ag-grid-community/client-side-row-model': {
                format: 'cjs',
            },
            '@ag-grid-community/csv-export': {
                format: 'cjs',
            },
            '@ag-grid-community/infinite-row-model': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/advanced-filter': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/charts': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/charts-enterprise': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/clipboard': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/column-tool-panel': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/core': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/excel-export': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/filter-tool-panel': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/master-detail': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/menu': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/multi-filter': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/range-selection': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/rich-select': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/row-grouping': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/server-side-row-model': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/set-filter': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/side-bar': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/sparklines': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/status-bar': {
                format: 'cjs',
            },
            '@ag-grid-enterprise/viewport-row-model': {
                format: 'cjs',
            },
            'ag-grid-community': {
                main: './dist/package/main.cjs.js',
                defaultExtension: 'js',
                format: 'cjs',
            },
            'ag-grid-enterprise': {
                main: './dist/package/main.cjs.js',
                defaultExtension: 'js',
                format: 'cjs',
            },
            'ag-grid-charts-enterprise': {
                main: './dist/package/main.cjs.js',
                defaultExtension: 'js',
                format: 'cjs',
            },
            'ag-grid-react': {
                main: './dist/package/index.cjs.js',
                defaultExtension: 'js',
                format: 'cjs',
            },
            'ag-charts-community': {
                defaultExtension: 'js',
                format: 'cjs',
            },
            'ag-charts-enterprise': {
                defaultExtension: 'js',
                format: 'cjs',
            },
        },
        meta: {
            typescript: {
                exports: 'ts',
            },
            '*.css': { loader: 'css' },
        },
    });
})(this);

window.addEventListener('error', (e) => {
    console.error('ERROR', e.message, e.filename);
});
