function createAudioHTML(path, flat) {
  if (flat) {
    return '<audio controls controlslist="nodownload" class="px-1" style="width: 36vw;"> <source src=' +
        path +
        ' type="audio/wav">Your browser does not support the audio element.</audio>';
  }
  return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}


function generateMergeTable(tableId, filenames, page, text) {
  let numPerPage = 5;
  let table = document.getElementById(tableId);
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  // const prefix = 'music/edit_' + tableId + '/';
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      // let reg = /[0-9]+/g;
      let command = filenames[i];
      // cell.innerHTML = command.replaceAll('_', ' ');
      cell.innerHTML = text[i]
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML('merge_codec/'+filenames[i]+'.gt.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML('merge_codec/'+filenames[i]+'.merge_encodec.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML('merge_codec/'+filenames[i]+'.encodec.wav', false);
      cell.style.textAlign = "center";

      // cell = row.insertCell(4);
      // cell.innerHTML = createAudioHTML("leying_wav_path.wav", false);
      // cell.style.textAlign = "center";
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      // cell = row.insertCell(4);
      // cell.innerHTML = '<br>';
      // cell.style.textAlign = "center";
    }
  }
}



function generateContinueTable(tableId, filenames, page, text) {
  let numPerPage = 5;
  let table = document.getElementById(tableId);
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  // const prefix = 'music/edit_' + tableId + '/';
  const end_idx = Math.min(page * numPerPage, filenames.length);
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      // let reg = /[0-9]+/g;
      let command = filenames[i];
      // cell.innerHTML = command.replaceAll('_', ' ');
      cell.innerHTML = text[i]
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML('continue/'+filenames[i]+'.encodec.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML('continue/'+filenames[i]+'.valler.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML('continue/'+filenames[i]+'.valle.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML('continue/'+filenames[i]+'.gt.wav', false);
      cell.style.textAlign = "center";
      // cell = row.insertCell(4);
      // cell.innerHTML = createAudioHTML("leying_wav_path.wav", false);
      // cell.style.textAlign = "center";
    } 
    // else {
    //   let cell = row.insertCell(0);
    //   cell.innerHTML = '<br>';
    //   cell = row.insertCell(1);
    //   cell.innerHTML = '<br>';
    //   cell.style.textAlign = "center";
    //   cell = row.insertCell(2);
    //   cell.innerHTML = '<br>';
    //   cell.style.textAlign = "center";
    //   cell = row.insertCell(3);
    //   cell.innerHTML = '<br>';
    //   cell.style.textAlign = "center";
    //   cell = row.insertCell(4);
    //   cell.innerHTML = '<br>';
    //   cell.style.textAlign = "center";
    // }
  }
}


function generateProsodyTable(tableId, filenames, page, text) {
  let numPerPage = 5;
  let table = document.getElementById(tableId);
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  // const prefix = 'music/edit_' + tableId + '/';
  const end_idx = Math.min(page * numPerPage, filenames.length);
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      // let reg = /[0-9]+/g;
      let command = filenames[i];
      // cell.innerHTML = command.replaceAll('_', ' ');
      cell.innerHTML = text[i]
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML('prosody/'+filenames[i]+'.prompt.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML('prosody/'+filenames[i]+'.prosody.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML('prosody/'+filenames[i]+'.valler.wav', false);
      cell.style.textAlign = "center";

      // cell = row.insertCell(4);
      // cell.innerHTML = createAudioHTML("leying_wav_path.wav", false);
      // cell.style.textAlign = "center";
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      // cell = row.insertCell(4);
      // cell.innerHTML = '<br>';
      // cell.style.textAlign = "center";
    }
  }
}


function generateCrossTable(tableId, filenames, page, text) {
  let numPerPage = 5;
  let table = document.getElementById(tableId);
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  // const prefix = 'music/edit_' + tableId + '/';
  const end_idx = Math.min(page * numPerPage, filenames.length);
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      // let reg = /[0-9]+/g;
      let command = filenames[i];
      // cell.innerHTML = command.replaceAll('_', ' ');
      cell.innerHTML = text[i]
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML('cross/'+filenames[i]+'.prompt.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML('cross/'+filenames[i]+'.valler.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML('cross/'+filenames[i]+'.valle.wav', false);
      cell.style.textAlign = "center";

      // cell = row.insertCell(4);
      // cell.innerHTML = createAudioHTML("leying_wav_path.wav", false);
      // cell.style.textAlign = "center";
    } 
    // else {
    //   let cell = row.insertCell(0);
    //   cell.innerHTML = '<br>';
    //   cell = row.insertCell(1);
    //   cell.innerHTML = '<br>';
    //   cell.style.textAlign = "center";
    //   cell = row.insertCell(2);
    //   cell.innerHTML = '<br>';
    //   cell.style.textAlign = "center";
    //   cell = row.insertCell(3);
    //   cell.innerHTML = '<br>';
    //   cell.style.textAlign = "center";
    //   cell = row.insertCell(4);
    //   cell.innerHTML = '<br>';
    //   cell.style.textAlign = "center";
    // }
  }
}


function generateHardTable(tableId, filenames, page, text) {
  let numPerPage = 5;
  let table = document.getElementById(tableId);
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  // const prefix = 'music/edit_' + tableId + '/';
  const end_idx = Math.min(page * numPerPage, filenames.length);
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow(i % numPerPage + 1);
    row.style.height = '80px';
    if (i < filenames.length) {
      let cell = row.insertCell(0);
      // let reg = /[0-9]+/g;
      let command = filenames[i];
      // cell.innerHTML = command.replaceAll('_', ' ');
      cell.innerHTML = text[i]
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML('hard/'+filenames[i]+'.prompt.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML('hard/'+filenames[i]+'.valler.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML('hard/'+filenames[i]+'.valle.wav', false);
      cell.style.textAlign = "center";

      // cell = row.insertCell(4);
      // cell.innerHTML = createAudioHTML("leying_wav_path.wav", false);
      // cell.style.textAlign = "center";
    } 
    // else {
    //   let cell = row.insertCell(0);
    //   cell.innerHTML = '<br>';
    //   cell = row.insertCell(1);
    //   cell.innerHTML = '<br>';
    //   cell.style.textAlign = "center";
    //   cell = row.insertCell(2);
    //   cell.innerHTML = '<br>';
    //   cell.style.textAlign = "center";
    //   cell = row.insertCell(3);
    //   cell.innerHTML = '<br>';
    //   cell.style.textAlign = "center";
    //   cell = row.insertCell(4);
    //   cell.innerHTML = '<br>';
    //   cell.style.textAlign = "center";
    // }
  }
}



// 洗牌函数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(1024 * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// codec = ['61-70968-0050', '121-121726-0009', '237-126133-0012', '260-123286-0025', '672-122797-0069', '1089-134691-0004', '1320-122617-0017', '7021-85628-0022', '8463-287645-0000', '8555-284447-0007']
// codec_txt = ['HE MADE AN EFFORT TO HIDE HIS CONDITION FROM THEM ALL AND ROBIN FELT HIS FINGERS TIGHTEN UPON HIS ARM', 'HOTEL A PLACE WHERE A GUEST OFTEN GIVES UP GOOD DOLLARS FOR POOR QUARTERS', 'THERE THERE HE SAID SOOTHINGLY PATTING HER BROWN FUZZY HEAD', 'FLIGHT WAS OUT OF THE QUESTION NOW THE REPTILES ROSE THEY WHEELED AROUND OUR LITTLE RAFT WITH A RAPIDITY GREATER THAN THAT OF EXPRESS TRAINS', 'IT WAS IN A CORNER THAT HE LAY AMONG WEEDS AND NETTLES', 'PRIDE AFTER SATISFACTION UPLIFTED HIM LIKE LONG SLOW WAVES', 'THEN AS IF SATISFIED OF THEIR SAFETY THE SCOUT LEFT HIS POSITION AND SLOWLY ENTERED THE PLACE', 'AND ALL HIS BROTHERS AND SISTERS STOOD ROUND AND LISTENED WITH THEIR MOUTHS OPEN', 'THIS WAS WHAT DID THE MISCHIEF SO FAR AS THE RUNNING AWAY WAS CONCERNED', 'THEREFORE HER MAJESTY PAID NO ATTENTION TO ANYONE AND NO ONE PAID ANY ATTENTION TO HER']

codec = ['7021-85628-0022', '1320-122617-0017', '121-121726-0009', '8463-287645-0000', '672-122797-0069', '260-123286-0025', '61-70968-0050', '237-126133-0012', '8555-284447-0007', '1089-134691-0004']
codec_txt = ['AND ALL HIS BROTHERS AND SISTERS STOOD ROUND AND LISTENED WITH THEIR MOUTHS OPEN', 'THEN AS IF SATISFIED OF THEIR SAFETY THE SCOUT LEFT HIS POSITION AND SLOWLY ENTERED THE PLACE', 'HOTEL A PLACE WHERE A GUEST OFTEN GIVES UP GOOD DOLLARS FOR POOR QUARTERS', 'THIS WAS WHAT DID THE MISCHIEF SO FAR AS THE RUNNING AWAY WAS CONCERNED', 'IT WAS IN A CORNER THAT HE LAY AMONG WEEDS AND NETTLES', 'FLIGHT WAS OUT OF THE QUESTION NOW THE REPTILES ROSE THEY WHEELED AROUND OUR LITTLE RAFT WITH A RAPIDITY GREATER THAN THAT OF EXPRESS TRAINS', 'HE MADE AN EFFORT TO HIDE HIS CONDITION FROM THEM ALL AND ROBIN FELT HIS FINGERS TIGHTEN UPON HIS ARM', 'THERE THERE HE SAID SOOTHINGLY PATTING HER BROWN FUZZY HEAD', 'THEREFORE HER MAJESTY PAID NO ATTENTION TO ANYONE AND NO ONE PAID ANY ATTENTION TO HER', 'PRIDE AFTER SATISFACTION UPLIFTED HIM LIKE LONG SLOW WAVES']

// shuffleArray(codec)

continue_task = ['237-126133-0002', '260-123440-0019', '1089-134686-0008', '5142-36377-0023', '4992-41806-0011', '3575-170457-0003', '2961-960-0022', '2830-3980-0010', '2300-131720-0005', '1995-1837-0004']
continue_txt = ['THEN DEAR SAID MISSUS WHITNEY YOU MUST BE KINDER TO HER THAN EVER THINK WHAT IT WOULD BE FOR ONE OF YOU TO BE AWAY FROM HOME EVEN AMONG FRIENDS', 'CRIED ALICE AGAIN FOR THIS TIME THE MOUSE WAS BRISTLING ALL OVER AND SHE FELT CERTAIN IT MUST BE REALLY OFFENDED', 'THE CHAOS IN WHICH HIS ARDOUR EXTINGUISHED ITSELF WAS A COLD INDIFFERENT KNOWLEDGE OF HIMSELF', 'YOU WERE QUITE RIGHT TO SAY NO AMBROSE BEGAN NEVER SMOKE WITH JOHN JAGO HIS CIGARS WILL POISON YOU', 'MOTHER CAREY POURED COFFEE NANCY CHOCOLATE AND THE OTHERS HELPED SERVE THE SANDWICHES AND CAKE DOUGHNUTS AND TARTS', 'SURELY IT MUST BE BECAUSE WE ARE IN DANGER OF LOVING EACH OTHER TOO WELL OF LOSING SIGHT OF THE CREATOR IN IDOLATRY OF THE CREATURE', 'PLATO HAD NOT THE COMMAND OF HIS MATERIALS WHICH WOULD HAVE ENABLED HIM TO PRODUCE A PERFECT WORK OF ART', 'EITHER HE CALLS MINISTERS THROUGH THE AGENCY OF MEN OR HE CALLS THEM DIRECTLY AS HE CALLED THE PROPHETS AND APOSTLES', 'WHY IF WE ERECT A STATION AT THE FALLS IT IS A GREAT ECONOMY TO GET IT UP TO THE CITY', 'HE PANTED TO KNOW IF SHE TOO KNEW OR KNEW AND CARED NOT OR CARED AND KNEW NOT']

// cross = ['1995-1837-0019', '2300-131720-0027', '1320-122617-0011', '672-122797-0055', '3570-5695-0008', '2830-3980-0051', '1580-141084-0048', '121-127105-0013', '1089-134686-0013', '3570-5694-0018', '2961-960-0014', '4970-29095-0016', '1284-1180-0001', '2961-961-0010', '2094-142345-0039', '1284-1181-0014', '4970-29095-0004']
cross = ['1995-1837-0019', '2300-131720-0027', '1320-122617-0011', '672-122797-0055', '3570-5695-0008', '2830-3980-0051', '1580-141084-0048', '121-127105-0013', '1089-134686-0013', '3570-5694-0018']
// cross_txt = ['HE SAT DOWN WEAK BEWILDERED AND ONE THOUGHT WAS UPPERMOST ZORA', 'EDISON HELD THAT THE ELECTRICITY SOLD MUST BE MEASURED JUST LIKE GAS OR WATER AND HE PROCEEDED TO DEVELOP A METER', 'I KNOW THE FIRST LETTER I WROTE TO YOU WAS ALL SENSELESS TRASH FROM BEGINNING TO END BUT I AM NOT ALTOGETHER THE IDLE DREAMING BEING IT WOULD SEEM TO DENOTE', 'THE LODGE IN WHICH UNCAS WAS CONFINED WAS IN THE VERY CENTER OF THE VILLAGE AND IN A SITUATION PERHAPS MORE DIFFICULT THAN ANY OTHER TO APPROACH OR LEAVE WITHOUT OBSERVATION', 'AND THEN HE TOLD ALL ABOUT HIS YOUTH AND THE LITTLE MICE HAD NEVER HEARD THE LIKE BEFORE AND THEY LISTENED AND SAID', 'SURELY IT MUST BE BECAUSE WE ARE IN DANGER OF LOVING EACH OTHER TOO WELL OF LOSING SIGHT OF THE CREATOR IN IDOLATRY OF THE CREATURE', 'THE QUESTION IS WHICH OF THE TWO METHODS WILL MOST EFFECTIVELY REACH THE PERSONS WHOSE CONVICTIONS IT IS DESIRED TO AFFECT', 'WHEN YOU ARGUE ABOUT THE NATURE OF GOD APART FROM THE QUESTION OF JUSTIFICATION YOU MAY BE AS PROFOUND AS YOU LIKE', 'IT WILL BE CLEAR TO YOU FROM WHAT I HAVE SAID THAT ONLY YOU COULD HAVE LET THIS YOUNG MAN OUT SINCE YOU WERE LEFT IN THE ROOM AND MUST HAVE LOCKED THE DOOR WHEN YOU WENT OUT', "YOU'LL EASILY JUDGE WHY WHEN YOU HEAR BECAUSE THE THING HAD BEEN SUCH A SCARE HE CONTINUED TO FIX ME", 'BUT CRESSWELL ADDED SIGNIFICANTLY CAPACITY DIFFERS ENORMOUSLY BETWEEN RACES', 'IF EVER HE WAS IMPELLED TO CAST SIN FROM HIM AND TO REPENT THE IMPULSE THAT MOVED HIM WAS THE WISH TO BE HER KNIGHT', 'UNCAS OCCUPIED A DISTANT CORNER IN A RECLINING ATTITUDE BEING RIGIDLY BOUND BOTH HANDS AND FEET BY STRONG AND PAINFUL WITHES', "WARRENTON SPOKE THUS WITH SIGNIFICANCE TO SHOW ROBIN THAT HE WAS NOT TO THINK GEOFFREY'S CLAIMS TO THE ESTATE WOULD BE PASSED BY", 'THE WEARERS OF UNIFORMS AND LIVERIES MAY BE ROUGHLY DIVIDED INTO TWO CLASSES THE FREE AND THE SERVILE OR THE NOBLE AND THE IGNOBLE', 'THE IDEAS ALSO REMAIN BUT THEY HAVE BECOME TYPES IN NATURE FORMS OF MEN ANIMALS BIRDS FISHES', 'RUTH SAT QUITE STILL FOR A TIME WITH FACE INTENT AND FLUSHED IT WAS OUT NOW', 'HIS HAT HAD A PEAKED CROWN AND A FLAT BRIM AND AROUND THE BRIM WAS A ROW OF TINY GOLDEN BELLS THAT TINKLED WHEN HE MOVED', 'BUT IN EGYPT THE TRADITIONS OF OUR OWN AND OTHER LANDS ARE BY US REGISTERED FOR EVER IN OUR TEMPLES', "I'VE STRONG ASSURANCE THAT NO EVIL WILL HAPPEN TO YOU AND MY UNCLE AND THE CHILDREN FROM ANYTHING I'VE DONE", 'HE SELECTED A SMALL GOLD BOTTLE WITH A PEPPER BOX TOP SO THAT THE POWDER MIGHT BE SPRINKLED ON ANY OBJECT THROUGH THE SMALL HOLES', 'I HEARD FATHER TELL COUSIN ABNER THAT HE WAS WHIPPED SO OFTEN FOR WHISTLING WHEN HE WAS A BOY THAT HE WAS DETERMINED TO HAVE WHAT COMPENSATION HE COULD GET NOW']
// cross_txt = ['HE SAT DOWN WEAK BEWILDERED AND ONE THOUGHT WAS UPPERMOST ZORA', 'EDISON HELD THAT THE ELECTRICITY SOLD MUST BE MEASURED JUST LIKE GAS OR WATER AND HE PROCEEDED TO DEVELOP A METER', 'THE LODGE IN WHICH UNCAS WAS CONFINED WAS IN THE VERY CENTER OF THE VILLAGE AND IN A SITUATION PERHAPS MORE DIFFICULT THAN ANY OTHER TO APPROACH OR LEAVE WITHOUT OBSERVATION', 'AND THEN HE TOLD ALL ABOUT HIS YOUTH AND THE LITTLE MICE HAD NEVER HEARD THE LIKE BEFORE AND THEY LISTENED AND SAID', 'THE QUESTION IS WHICH OF THE TWO METHODS WILL MOST EFFECTIVELY REACH THE PERSONS WHOSE CONVICTIONS IT IS DESIRED TO AFFECT', 'WHEN YOU ARGUE ABOUT THE NATURE OF GOD APART FROM THE QUESTION OF JUSTIFICATION YOU MAY BE AS PROFOUND AS YOU LIKE', 'IT WILL BE CLEAR TO YOU FROM WHAT I HAVE SAID THAT ONLY YOU COULD HAVE LET THIS YOUNG MAN OUT SINCE YOU WERE LEFT IN THE ROOM AND MUST HAVE LOCKED THE DOOR WHEN YOU WENT OUT', "YOU'LL EASILY JUDGE WHY WHEN YOU HEAR BECAUSE THE THING HAD BEEN SUCH A SCARE HE CONTINUED TO FIX ME", 'IF EVER HE WAS IMPELLED TO CAST SIN FROM HIM AND TO REPENT THE IMPULSE THAT MOVED HIM WAS THE WISH TO BE HER KNIGHT', 'THE WEARERS OF UNIFORMS AND LIVERIES MAY BE ROUGHLY DIVIDED INTO TWO CLASSES THE FREE AND THE SERVILE OR THE NOBLE AND THE IGNOBLE']
cross_txt = ['HE SAT DOWN WEAK BEWILDERED AND ONE THOUGHT WAS UPPERMOST ZORA', 'EDISON HELD THAT THE ELECTRICITY SOLD MUST BE MEASURED JUST LIKE GAS OR WATER AND HE PROCEEDED TO DEVELOP A METER', 'THE LODGE IN WHICH UNCAS WAS CONFINED WAS IN THE VERY CENTER OF THE VILLAGE AND IN A SITUATION PERHAPS MORE DIFFICULT THAN ANY OTHER TO APPROACH OR LEAVE WITHOUT OBSERVATION', 'AND THEN HE TOLD ALL ABOUT HIS YOUTH AND THE LITTLE MICE HAD NEVER HEARD THE LIKE BEFORE AND THEY LISTENED AND SAID', 'THE QUESTION IS WHICH OF THE TWO METHODS WILL MOST EFFECTIVELY REACH THE PERSONS WHOSE CONVICTIONS IT IS DESIRED TO AFFECT', 'WHEN YOU ARGUE ABOUT THE NATURE OF GOD APART FROM THE QUESTION OF JUSTIFICATION YOU MAY BE AS PROFOUND AS YOU LIKE', 'IT WILL BE CLEAR TO YOU FROM WHAT I HAVE SAID THAT ONLY YOU COULD HAVE LET THIS YOUNG MAN OUT SINCE YOU WERE LEFT IN THE ROOM AND MUST HAVE LOCKED THE DOOR WHEN YOU WENT OUT', "YOU'LL EASILY JUDGE WHY WHEN YOU HEAR BECAUSE THE THING HAD BEEN SUCH A SCARE HE CONTINUED TO FIX ME", 'IF EVER HE WAS IMPELLED TO CAST SIN FROM HIM AND TO REPENT THE IMPULSE THAT MOVED HIM WAS THE WISH TO BE HER KNIGHT', 'THE WEARERS OF UNIFORMS AND LIVERIES MAY BE ROUGHLY DIVIDED INTO TWO CLASSES THE FREE AND THE SERVILE OR THE NOBLE AND THE IGNOBLE']

// prosody = ['672-122797-0048', '237-134500-0040', '260-123286-0002', '672-122797-0040', '2830-3980-0006',  '672-122797-0055', '8455-210777-0049', '7127-75947-0001', '6930-81414-0020', '6829-68771-0025', '4970-29095-0016', '4507-16021-0036', '4507-16021-0035', '3729-6852-0028', '3575-170457-0033', '2830-3980-0065']
prosody = ['672-122797-0048', '237-134500-0040', '260-123286-0002', '672-122797-0040', '2830-3980-0006',  '672-122797-0055', '8455-210777-0049', '7127-75947-0001', '6930-81414-0020', '4970-29095-0016']
// prosody_txt = ['HOTEL A PLACE WHERE A GUEST OFTEN GIVES UP GOOD DOLLARS FOR POOR QUARTERS', 'SOMEONE ELSE TOLD A STORY NOT PARTICULARLY EFFECTIVE WHICH I SAW HE WAS NOT FOLLOWING', "I PRAY FOR YOU BUT THAT'S NOT THE SAME AS IF YOU PRAYED YOURSELF", 'ALL MY DANGER AND SUFFERINGS WERE NEEDED TO STRIKE A SPARK OF HUMAN FEELING OUT OF HIM BUT NOW THAT I AM WELL HIS NATURE HAS RESUMED ITS SWAY', 'THE WEATHER IF WE MAY USE THAT TERM WILL CHANGE BEFORE LONG', 'AND THE WHOLE NIGHT THE TREE STOOD STILL AND IN DEEP THOUGHT', 'AGAINST THESE BOASTING FALSE APOSTLES PAUL BOLDLY DEFENDS HIS APOSTOLIC AUTHORITY AND MINISTRY', 'IF IT ONLY WERE NOT SO DARK HERE AND SO TERRIBLY LONELY', 'AND THEN HE TOLD ALL ABOUT HIS YOUTH AND THE LITTLE MICE HAD NEVER HEARD THE LIKE BEFORE AND THEY LISTENED AND SAID', 'AND THEN HE TOLD ALL ABOUT HIS YOUTH AND THE LITTLE MICE HAD NEVER HEARD THE LIKE BEFORE AND THEY LISTENED AND SAID', 'PEARL SEEING THE ROSE BUSHES BEGAN TO CRY FOR A RED ROSE AND WOULD NOT BE PACIFIED', 'LIEUTENANT CROSSTREES IS A VERY GALLANT OFFICER', 'UPON THIS MADAME DEIGNED TO TURN HER EYES LANGUISHINGLY TOWARDS THE COMTE OBSERVING', 'I SAY YOU DO KNOW WHAT THIS MEANS AND YOU MUST TELL US', "SHE SAT DOWN IN A ROCKING CHAIR AND CLASPING HER HANDS IN HER LAP ROCKED SLOWLY BACK AND FORTH I'M SORRY SAID BETH", 'RUTH SAT QUITE STILL FOR A TIME WITH FACE INTENT AND FLUSHED IT WAS OUT NOW', 'FACTS FORM ONE OF THESE AND IDEAS THE OTHER', 'TRUE HISTORY BEING A MIXTURE OF ALL THINGS THE TRUE HISTORIAN MINGLES IN EVERYTHING', 'ALL THESE HONEST PERSONS ARE WAITING THEIR TURN TO GET THEIR SNUFF BOXES FILLED', 'SATURDAY AFTER SATURDAY COMES ROUND AND I CAN HAVE NO HOPE OF HEARING YOUR KNOCK AT THE DOOR AND THEN BEING TOLD THAT MISS E IS COME OH DEAR', 'PAUL ANSWERS THE MAN WHO IS NAMED JESUS CHRIST AND THE SON OF GOD GAVE HIMSELF FOR OUR SINS']
prosody_txt = ['IF IT ONLY WERE NOT SO DARK HERE AND SO TERRIBLY LONELY', "I PRAY FOR YOU BUT THAT'S NOT THE SAME AS IF YOU PRAYED YOURSELF", 'ALL MY DANGER AND SUFFERINGS WERE NEEDED TO STRIKE A SPARK OF HUMAN FEELING OUT OF HIM BUT NOW THAT I AM WELL HIS NATURE HAS RESUMED ITS SWAY', 'AND THE WHOLE NIGHT THE TREE STOOD STILL AND IN DEEP THOUGHT', 'AGAINST THESE BOASTING FALSE APOSTLES PAUL BOLDLY DEFENDS HIS APOSTOLIC AUTHORITY AND MINISTRY', 'AND THEN HE TOLD ALL ABOUT HIS YOUTH AND THE LITTLE MICE HAD NEVER HEARD THE LIKE BEFORE AND THEY LISTENED AND SAID', 'LIEUTENANT CROSSTREES IS A VERY GALLANT OFFICER', 'UPON THIS MADAME DEIGNED TO TURN HER EYES LANGUISHINGLY TOWARDS THE COMTE OBSERVING', 'I SAY YOU DO KNOW WHAT THIS MEANS AND YOU MUST TELL US', 'RUTH SAT QUITE STILL FOR A TIME WITH FACE INTENT AND FLUSHED IT WAS OUT NOW']

hard = ['61', '64', '81', '62', '31', '59', '93', '77', '44', '97']
// hard_txt = ['76', '61', '64', '81', '62', '31', '59', '93', '77', '2', '44', '97']
hard_txt = ['As the cosmic cosmic cosmic cosmic cosmic cosmic dance of the stars unfolds in in in in in in silence, revealing the mystical mysteries of the celestial celestial celestial celestial celestial celestial realm', 'Beneath the moonlit night, the solitary wolf’s haunting howl howl howl howl howl echoed through the ancient forest, embodying the primal spirit of the wilderness.', 'The relentless relentless relentless relentless relentless relentless pursuit of perfection in in in in in in in in in craftsmanship led the artisan to create an exquisite masterpiece admired for its meticulous meticulous meticulous meticulous meticulous meticulous details.', 'As the quantum physicist delved into the quantum realm, the enigmatic entanglement of particles perplexed even the most astute astute astute astute astute astute minds.', 'Adventurous ants anxiously ate apples, adventurous adventurous apples.', 'Amidst the towering skyscrapers, the bustling cityscape echoed with the incessant hum hum hum hum hum of commerce and ambition.', 'Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop not to stop not to stop not to stop not to stop questioning.', 'Strategically strategizing strategy in the fast-paced world of e-sports demands a dexterous dexterous dexterous dexterous dexterous dexterous mind.', 'Excited elephants excitedly explored excited excited explorations.', 'Life is like a bicycle, to keep your balance, you must keep moving keep moving keep moving keep moving keep moving. The more you know, the more you realize you don’t know, but knowing that you don’t know is the beginning of wisdom.']



generateMergeTable('codec', codec, 1, codec_txt);

generateContinueTable('continue', continue_task, 1, continue_txt)

generateProsodyTable('prosody', prosody, 1, prosody_txt)

generateCrossTable('cross', cross, 1, cross_txt)

generateHardTable('hard', hard, 1, hard_txt)

// generateRemixTable('instr', instr  , 1);
// generateRemixTable('genre', genre  , 1);
// generateRemixGuideTable('soft', soft  , 1);
// generateRemixGuideTable('happy', happy  , 1);
// generateDiversityTable('dedit', dedit  , 1);
// generateDiversityRemixTable('dremix', dremix  , 1);
// generateDiversityTable('sedit', sedit  , 1);
// generateRealTable('real', real, title, 1);
// generateRealTable('melody', melody, melody_t, 1);
// generateMultiTable('multi', multi  , 1);
// generateLongTable('long', long  , 1);

$(document).ready(function() {
  for (let i = 1; i <= 2; i++) {
    let id = '#codec-' + i;
    $(id).click(function() {
      generateMergeTable(
          'codec',
          codec, i, codec_txt);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});


$(document).ready(function() {
  for (let i = 1; i <= 2; i++) {
    let id = '#continue-' + i;
    $(id).click(function() {
      generateContinueTable(
          'continue',
          continue_task, i, continue_txt);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});

$(document).ready(function() {
  for (let i = 1; i <= 2; i++) {
    let id = '#prosody-' + i;
    $(id).click(function() {
      generateProsodyTable(
          'prosody',
          prosody, i, prosody_txt);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});

$(document).ready(function() {
  for (let i = 1; i <= 2; i++) {
    let id = '#cross-' + i;
    $(id).click(function() {
      generateCrossTable(
          'cross',
          cross, i, cross_txt);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});


$(document).ready(function() {
  for (let i = 1; i <= 2; i++) {
    let id = '#hard-' + i;
    $(id).click(function() {
      generateHardTable(
          'hard',
          hard, i, hard_txt);
      $(id).parent().siblings().removeClass('active');
      $(id).parent().addClass('active');
      return false;
    });
  }
});
