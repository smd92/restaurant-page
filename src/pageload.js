const pageLoad = (function() {

    function test() {
        console.log('Hi, Test!');
    }

    return {
        test
    }
})();

export default pageLoad;