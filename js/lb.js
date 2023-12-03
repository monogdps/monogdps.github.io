class dllib {
    dlIter = 0;
    userIter = 0;

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    setDemon(id, lvlname, author, link) {
        this.dlIter++;
        const dllist = document.getElementById('dl-list');
        const item = document.createElement('li');
        item.className = 'dl-item';
        item.onclick = () => window.location.href = link;
        dllist.appendChild(item);

        const img = document.createElement('img');
        img.src = `./img/lvls/${id}.png?${this.getRandomInt(0, 999999)}`;
        img.alt = '';
        item.appendChild(img);

        const itemText = document.createElement('div');
        itemText.className = 'dl-item-text';
        item.appendChild(itemText);

        const h2 = document.createElement('h2');
        const oneupstr = '' + this.dlIter.toString() + '. ';
        const zero = document.createElement('text');
        const zeroText = document.createTextNode('');
        zero.className = 'tire';
        zero.appendChild(zeroText);
        const twoupstr = ' ' + lvlname;
        const firstUpStrNodeText = document.createTextNode(oneupstr);
        const secondUpStrNodeText = document.createTextNode(twoupstr);
        h2.appendChild(firstUpStrNodeText);
        h2.appendChild(zero);
        h2.appendChild(secondUpStrNodeText);
        itemText.appendChild(h2);

        const p = document.createElement('p');
        const pText = 'By ' + author;
        const pTextNode = document.createTextNode(pText);
        p.appendChild(pTextNode);
        itemText.appendChild(p);

        const none = document.createElement('p');
        none.className = 'none';
        const noneText = document.createTextNode(id.toString());
        none.appendChild(noneText);
        itemText.appendChild(none);
    }

    setModalInfo(id, lvlname, verifer, url) {
        const lostID = localStorage.getItem('id');
        if (lostID != id) return;

        const main = document.querySelector('.lvl-infrmation');
        const lvlname1 = document.createElement('h2');
        lvlname1.className = 'lvlname';
        const lvlnameNode = document.createTextNode(lvlname);
        lvlname1.appendChild(lvlnameNode);
        main.appendChild(lvlname1);

        const authorname = document.createElement('p');
        authorname.className = 'lvl-creature';
        const authorText = 'Level by ' + verifer;
        const authorTextNode = document.createTextNode(authorText);
        authorname.appendChild(authorTextNode);
        main.appendChild(authorname);

        const iframe = document.createElement('iframe');
        iframe.className = 'lvl-video';
        iframe.width = 560;
        iframe.height = 315;
        iframe.src = 'https://www.youtube.com/embed/' + url;
        iframe.title = 'YouTube video player';
        iframe.frameBorder = 0;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        main.appendChild(iframe);
    }

    infoItem(header, val) {
        const block = document.createElement('div');
        block.className = 'info-item';

        const hrspan = document.createElement('span');
        block.appendChild(hrspan);

        const lvlInfoValue = document.createElement('div');
        lvlInfoValue.className = 'level-info-value';
        const lvlInfoValueNode = document.createTextNode(header);
        lvlInfoValue.appendChild(lvlInfoValueNode);
        block.appendChild(lvlInfoValue);

        const hrspan2 = document.createElement('span');
        block.appendChild(hrspan2);

        const value = document.createElement('div');
        const valueNode = document.createTextNode(val);
        value.appendChild(valueNode);
        block.appendChild(value);

        return block;
    }

    setRecord(id, username, record, url, urltype) {
        const lostID = localStorage.getItem('id');
        if (lostID != id) return;

        urltype = urltype.replace(/-/g, ' ');

        const table = document.querySelector('table');
        const tr = document.createElement('tr');
        table.appendChild(tr);

        const td1 = document.createElement('td');
        const nodeText1 = document.createTextNode(username);
        td1.appendChild(nodeText1);
        tr.appendChild(td1);

        const td2 = document.createElement('td');
        const nodeText2 = document.createTextNode(record);
        td2.appendChild(nodeText2);
        tr.appendChild(td2);

        const td3 = document.createElement('td');
        const text3 = document.createElement('a');
        text3.href = url;
        const nodeText3 = document.createTextNode(urltype);
        text3.appendChild(nodeText3);
        td3.appendChild(text3);
        tr.appendChild(td3);
    }

    addUserTop(username, points, hardest, complete, verified, firstv, progress) {
        this.userIter++;
        const userlist = document.querySelector('.leaders-list');
        const li = document.createElement('li');
        li.className = 'leaders-item';
        userlist.appendChild(li);

        const spoilerText = document.createElement('div');
        spoilerText.className = 'spoiler-text';
        li.appendChild(spoilerText);

        const h2 = document.createElement('h2');
        h2.className = 'spoiler-header';
        const h2Text = this.userIter + '. ' + username + ' - ' + points;
        const h2TextNode = document.createTextNode(h2Text);
        h2.appendChild(h2TextNode);
        spoilerText.appendChild(h2);

        const content = document.createElement('div');
        let hardestLvl = hardest.replace(/-/g, ' ');
        hardestLvl = hardestLvl.replace(/_/g, ', ');
        let completedLvls = complete.replace(/-/g, ' ');
        completedLvls = completedLvls.replace(/_/g, ', ');
        let verifiedLvls = verified.replace(/_/g, ', ');
        verifiedLvls = verifiedLvls.replace(/-/g, ' ');
        let firstvLvls = firstv.replace(/-/g, ' ');
        firstvLvls = firstvLvls.replace(/_/g, ', ');
        let progressLvls = progress.replace(/-/g, ' ');
        progressLvls = progressLvls.replace(/_/g, ', ');
        content.className = 'spoiler-content';
        content.innerText = 'Хардест: ' + hardestLvl + '\nПройденные уровни: ' + completedLvls + '\nВерифицированные уровни: ' + verifiedLvls + '\nСтал первым виктором: ' + firstvLvls + '\nПрогрессы: ' + progressLvls;
        spoilerText.appendChild(content);

        const span = document.createElement('span');
        span.className = 'toggle-spoiler';
        li.appendChild(span);
    }
}