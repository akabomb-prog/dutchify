function dutchify(text) {
    // this is a bad implementation

    // if you have a better solution to capital letters,
    // please post it in Issues. thanks!
    return text.replace(/oo/g, 'oe')
        .replace(/a/g, 'e')
        .replace(/g/g, 'k')
        .replace(/b/g, 'p')
        .replace(/ea/g, 'ee')
        .replace(/oo/g, 'ie')
        .replace(/v/g, 'f')
        .replace(/th/g, 'd')
        .replace(/j/g, 'dj')

        .replace(/A/g, 'E')
        .replace(/G/g, 'K')
        .replace(/B/g, 'P')
        .replace(/EA/g, 'EE')
        .replace(/OO/g, 'IE')
        .replace(/V/g, 'F')
        .replace(/TH/g, 'D')
        .replace(/J/g, 'DJ')

        .replace(/Th/g, 'D');
}
