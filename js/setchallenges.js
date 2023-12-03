const add = new dllib();

$.get('./js/dl/cadd.txt?' + add.getRandomInt(0, 9999999), (data) => {
    console.log(data);
    const lines = data.split('\n');
    for(let i = 0; i < lines.length; i++) {
        const params = lines[i].split(' ');
        let lvlname = params[1].replace(/-/g, ' ');
        add.setDemon(params[0], lvlname, params[2], params[3], params[4]);
    }
});