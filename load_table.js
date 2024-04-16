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
      cell.innerHTML = createAudioHTML('merge_codec/'+filenames[i]+'.encodec.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML('merge_codec/'+filenames[i]+'.merge_encodec.wav', false);
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
      cell.innerHTML = createAudioHTML('continue/'+filenames[i]+'.gt.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML('continue/'+filenames[i]+'.encodec.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML('continue/'+filenames[i]+'.valle.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML('continue/'+filenames[i]+'.vallma.wav', false);
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
      cell.innerHTML = createAudioHTML('prosody/'+filenames[i]+'.vallma.wav', false);
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
      cell.innerHTML = createAudioHTML('cross/'+filenames[i]+'.valle.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML('cross/'+filenames[i]+'.vallma.wav', false);
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
      cell.innerHTML = createAudioHTML('hard/'+filenames[i]+'.valle.wav', false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML('hard/'+filenames[i]+'.vallma.wav', false);
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


// add = [
//   'add_acoustic_guitar_1',
//   'add_bass_42',
//   'add_drum_kit_47',
//   'add_acoustic_guitar_11',
//   'add_piano_16',
//   'add_drum_kit_49',
//   'add_drum_kit_55',
//   'add_piano_19',
//   'add_piano_25',
//   'add_rhythm_acoustic_guitar_0',
// ]
// remove = ['remove_drum_kit_109', 'remove_drum_kit_110', 'remove_bass_96', 'remove_piano_76', 'remove_drum_kit_107', 'remove_electric_piano_83', 'remove_acoustic_guitar_68', 'remove_rhythm_acoustic_guitar_69', 'remove_acoustic_guitar_62', 'remove_piano_79']
// extract = ['extract_drum_kit_172', 'extract_drum_kit_166', 'extract_rhythm_acoustic_guitar_123', 'extract_bass_153', 'extract_electric_piano_136', 'extract_piano_141', 'extract_piano_142', 'extract_acoustic_guitar_126', 'extract_drum_kit_178', 'extract_rhythm_acoustic_guitar_128']
// replace = ['replace_rhythm_acoustic_guitar_with_drum_kit_202', 'replace_bass_with_piano_207', 'replace_bass_with_drum_kit_219', 'replace_bass_with_electric_guitar_236', 'replace_acoustic_guitar_with_drum_kit_189', 'replace_pedal_steel_guitar_with_bass_181', 'replace_pedal_steel_guitar_with_drum_kit_192', 'replace_bass_with_electric_guitar_227', 'replace_drum_kit_with_bass_239', 'replace_bass_with_electric_guitar_182']

// instr = ['remix_with_guitar_drums_piano_synth_lead_20', 'remix_with_drums_guitar_bass_3', 'remix_with_drums_piano_12', 'remix_with_bass_drum_strings_1', 'remix_with_bass_guitar_drums_2', 'remix_with_guitar_strings_drums_bass_10', 'remix_with_piano_drums_strings_bass_guitar_11', 'remix_with_guitar_strings_synth_pad_bass_piano_13', 'remix_with_guitar_drums_bass_piano_strings_17', 'remix_with_bass_synth_lead_strings_piano_drums_18']
// //['remix_this_music_11', 'remix_this_music_20', 'remix_this_music_17', 'remix_this_music_2', 'remix_this_music_13', 'remix_this_music_12', 'remix_with_bass_drum_strings_1', 'remix_this_music_10', 'remix_this_music_3', 'remix_this_music_18']
// // ['remix_with_guitar_drums_piano_synth_lead_20', 'remix_with_drums_piano_guitar_bass_3', 'remix_with_drums_piano_12', 'remix_with_bass_piano_strings_1', 'remix_with_bass_guitar_drums_2', 'remix_with_guitar_piano_strings_drums_bass_10', 'remix_with_piano_drums_strings_bass_guitar_11', 'remix_with_guitar_strings_synth_pad_bass_piano_13', 'remix_with_guitar_drums_bass_piano_strings_17', 'remix_with_bass_synth_lead_strings_piano_drums_18']

// genre = ['remix_to_pop_genre_10', 'remix_to_blues_genre_5', 'remix_to_r_and_b_genre_14', 'remix_to_funk_genre_3', 'remix_to_soul_genre_6', 'remix_to_alternative_genre_2', 'remix_to_r_and_b_genre_12', 'remix_to_rock_genre_9', 'remix_to_disco_genre_15', 'remix_to_pop_genre_13']

// soft = ['remix_with_piano_drums_guitar_bass_14', 'remix_with_bass_piano_guitar_drums_9', 'remix_with_piano_drums_bass_guitar_23']
// // ['remix_this_music_9', 'remix_this_music_23', 'remix_this_music_14']
// // ['remix_with_piano_drums_guitar_bass_14', 'remix_with_bass_piano_guitar_drums_9', 'remix_with_piano_drums_bass_guitar_23']

// happy = ['remix_with_bass_drums_guitar_piano_53', 'remix_with_bass_0', 'remix_with_drums_bass_guitar_18']
// // ['remix_this_music_18', 'remix_this_music_53', 'remix_this_music_0']
// // ['remix_with_bass_drums_guitar_piano_53', 'remix_with_bass_0', 'remix_with_drums_bass_guitar_18']
// dedit = ['add_piano_16', 'add_acoustic_guitar_1', 'add_drum_kit_49', 'replace_bass_with_electric_guitar_236', 'replace_bass_with_drum_kit_219', 'replace_bass_with_piano_207']

// dremix = ['remix_to_pop_genre_25', 'remix_to_alternative_genre_2', 'remix_with_drums_guitar_bass_29', 'remix_with_drums_piano_12', 'remix_with_bass_synth_lead_drums_31', 'remix_to_pop_genre_10']

// sedit = ['remove_drum_kit_107', 'extract_piano_141', 'extract_rhythm_acoustic_guitar_123', 'extract_drum_kit_166', 'remove_piano_76', 'remove_acoustic_guitar_62']

// multi = ['audit', 'instructme']

// long = ['add_rhythm_acoustic_guitar_1', 'add_rhythm_acoustic_guitar_1', 'extract_electric_guitar_8', 'extract_electric_guitar_8', 'add_bass_3', 'add_bass_3', 'add_electric_drum_kit_0', 'add_electric_drum_kit_0', 'remove_piano_6', 'remove_piano_6']

// real = ['add_rhythm_acoustic_guitar_0', 'add_string_sections_1', 'replace_acoustic_guitar_with_piano_2', 'replace_violin_with_piano_5', 'replace_piano_with_acoustic_guitar_6', 'remove_electric_guitar_71', 'extract_electric_guitar_7', 'remove_drum_kit_8', 'add_bass_9', 'add_electric_drum_kit_10']

// title = ['Lost Woods', 'Gugur Bunga', 'Zelda', "Twilight - Bella's Lullaby", 'Dolphin Dance', 'Fall Sounds', 'Fall Sounds', 'Amas Veritas', 'Aşk-ı Memnu Jenerik Müziği', "Eline Kleine Nachtmusik-Mov't 1-M'"]

// melody = ['add_bass_0', 'remove_drum_kit_1', 'replace_drum_kit_with_piano_2', 'remove_drum_kit_3']

// melody_t = ['菊花台', '麦浪', '月亮不曾奔我而来', 'Lover']

// generateEditTable('add', add  , 1);


// 洗牌函数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(1024 * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

codec = ['61-70968-0050', '121-121726-0009', '237-126133-0012', '260-123286-0025', '672-122797-0069', '1089-134691-0004', '1320-122617-0017', '7021-85628-0022', '8463-287645-0000', '8555-284447-0007']
codec_txt = ['HE MADE AN EFFORT TO HIDE HIS CONDITION FROM THEM ALL AND ROBIN FELT HIS FINGERS TIGHTEN UPON HIS ARM', 'HOTEL A PLACE WHERE A GUEST OFTEN GIVES UP GOOD DOLLARS FOR POOR QUARTERS', 'THERE THERE HE SAID SOOTHINGLY PATTING HER BROWN FUZZY HEAD', 'FLIGHT WAS OUT OF THE QUESTION NOW THE REPTILES ROSE THEY WHEELED AROUND OUR LITTLE RAFT WITH A RAPIDITY GREATER THAN THAT OF EXPRESS TRAINS', 'IT WAS IN A CORNER THAT HE LAY AMONG WEEDS AND NETTLES', 'PRIDE AFTER SATISFACTION UPLIFTED HIM LIKE LONG SLOW WAVES', 'THEN AS IF SATISFIED OF THEIR SAFETY THE SCOUT LEFT HIS POSITION AND SLOWLY ENTERED THE PLACE', 'AND ALL HIS BROTHERS AND SISTERS STOOD ROUND AND LISTENED WITH THEIR MOUTHS OPEN', 'THIS WAS WHAT DID THE MISCHIEF SO FAR AS THE RUNNING AWAY WAS CONCERNED', 'THEREFORE HER MAJESTY PAID NO ATTENTION TO ANYONE AND NO ONE PAID ANY ATTENTION TO HER']
// shuffleArray(codec)

continue_task = ['121-121726-0007', '237-126133-0002', '260-123440-0019', '1089-134686-0008', '5142-36377-0023', '5105-28240-0015', '4992-41806-0011', '4446-2271-0020', '3575-170457-0003', '3570-5694-0015', '2961-960-0022', '2830-3980-0010', '2300-131720-0005', '1995-1837-0004', '1580-141083-0000', '1320-122617-0034', '1221-135767-0014']
continue_txt = ['HORSE SENSE A DEGREE OF WISDOM THAT KEEPS ONE FROM BETTING ON THE RACES', 'THEN DEAR SAID MISSUS WHITNEY YOU MUST BE KINDER TO HER THAN EVER THINK WHAT IT WOULD BE FOR ONE OF YOU TO BE AWAY FROM HOME EVEN AMONG FRIENDS', 'CRIED ALICE AGAIN FOR THIS TIME THE MOUSE WAS BRISTLING ALL OVER AND SHE FELT CERTAIN IT MUST BE REALLY OFFENDED', 'THE CHAOS IN WHICH HIS ARDOUR EXTINGUISHED ITSELF WAS A COLD INDIFFERENT KNOWLEDGE OF HIMSELF', 'YOU WERE QUITE RIGHT TO SAY NO AMBROSE BEGAN NEVER SMOKE WITH JOHN JAGO HIS CIGARS WILL POISON YOU', 'FOR SOME MOMENTS HE SEEMED PERFECTLY STUPEFIED THEN RECOVERING HIMSELF HE BEGAN TO OVERWHELM THE COUNT WITH A TORRENT OF QUESTIONS', 'MOTHER CAREY POURED COFFEE NANCY CHOCOLATE AND THE OTHERS HELPED SERVE THE SANDWICHES AND CAKE DOUGHNUTS AND TARTS', 'OF COURSE HE REFLECTED SHE ALWAYS HAD THAT COMBINATION OF SOMETHING HOMELY AND SENSIBLE AND SOMETHING UTTERLY WILD AND DAFT', 'SURELY IT MUST BE BECAUSE WE ARE IN DANGER OF LOVING EACH OTHER TOO WELL OF LOSING SIGHT OF THE CREATOR IN IDOLATRY OF THE CREATURE', 'SO MANY OF THEM HOWEVER AS MAKE UP THE RETAINER AND HANGERS ON OF THE PATRON MAY BE CLASSED AS VICARIOUS CONSUMER WITHOUT QUALIFICATION', 'PLATO HAD NOT THE COMMAND OF HIS MATERIALS WHICH WOULD HAVE ENABLED HIM TO PRODUCE A PERFECT WORK OF ART', 'EITHER HE CALLS MINISTERS THROUGH THE AGENCY OF MEN OR HE CALLS THEM DIRECTLY AS HE CALLED THE PROPHETS AND APOSTLES', 'WHY IF WE ERECT A STATION AT THE FALLS IT IS A GREAT ECONOMY TO GET IT UP TO THE CITY', 'HE PANTED TO KNOW IF SHE TOO KNEW OR KNEW AND CARED NOT OR CARED AND KNEW NOT', 'I WILL ENDEAVOUR IN MY STATEMENT TO AVOID SUCH TERMS AS WOULD SERVE TO LIMIT THE EVENTS TO ANY PARTICULAR PLACE OR GIVE A CLUE AS TO THE PEOPLE CONCERNED', 'HOLD SAID DAVID PERCEIVING THAT WITH THIS ASSURANCE THEY WERE ABOUT TO LEAVE HIM I AM AN UNWORTHY AND HUMBLE FOLLOWER OF ONE WHO TAUGHT NOT THE DAMNABLE PRINCIPLE OF REVENGE', 'YEA HIS HONOURABLE WORSHIP IS WITHIN BUT HE HATH A GODLY MINISTER OR TWO WITH HIM AND LIKEWISE A LEECH']


prosody = ['121-121726-0009', '121-127105-0001', '237-134500-0040', '260-123286-0002', '260-123288-0001', '672-122797-0040', '2830-3980-0006', '672-122797-0048', '672-122797-0055', '672-122797-0055', '1221-135767-0024', '8455-210777-0049', '7127-75947-0001', '6930-81414-0020', '6829-68771-0025', '4970-29095-0016', '4507-16021-0036', '4507-16021-0035', '3729-6852-0028', '3575-170457-0033', '2830-3980-0065']
prosody_txt = ['HOTEL A PLACE WHERE A GUEST OFTEN GIVES UP GOOD DOLLARS FOR POOR QUARTERS', 'SOMEONE ELSE TOLD A STORY NOT PARTICULARLY EFFECTIVE WHICH I SAW HE WAS NOT FOLLOWING', "I PRAY FOR YOU BUT THAT'S NOT THE SAME AS IF YOU PRAYED YOURSELF", 'ALL MY DANGER AND SUFFERINGS WERE NEEDED TO STRIKE A SPARK OF HUMAN FEELING OUT OF HIM BUT NOW THAT I AM WELL HIS NATURE HAS RESUMED ITS SWAY', 'THE WEATHER IF WE MAY USE THAT TERM WILL CHANGE BEFORE LONG', 'AND THE WHOLE NIGHT THE TREE STOOD STILL AND IN DEEP THOUGHT', 'AGAINST THESE BOASTING FALSE APOSTLES PAUL BOLDLY DEFENDS HIS APOSTOLIC AUTHORITY AND MINISTRY', 'IF IT ONLY WERE NOT SO DARK HERE AND SO TERRIBLY LONELY', 'AND THEN HE TOLD ALL ABOUT HIS YOUTH AND THE LITTLE MICE HAD NEVER HEARD THE LIKE BEFORE AND THEY LISTENED AND SAID', 'AND THEN HE TOLD ALL ABOUT HIS YOUTH AND THE LITTLE MICE HAD NEVER HEARD THE LIKE BEFORE AND THEY LISTENED AND SAID', 'PEARL SEEING THE ROSE BUSHES BEGAN TO CRY FOR A RED ROSE AND WOULD NOT BE PACIFIED', 'LIEUTENANT CROSSTREES IS A VERY GALLANT OFFICER', 'UPON THIS MADAME DEIGNED TO TURN HER EYES LANGUISHINGLY TOWARDS THE COMTE OBSERVING', 'I SAY YOU DO KNOW WHAT THIS MEANS AND YOU MUST TELL US', "SHE SAT DOWN IN A ROCKING CHAIR AND CLASPING HER HANDS IN HER LAP ROCKED SLOWLY BACK AND FORTH I'M SORRY SAID BETH", 'RUTH SAT QUITE STILL FOR A TIME WITH FACE INTENT AND FLUSHED IT WAS OUT NOW', 'FACTS FORM ONE OF THESE AND IDEAS THE OTHER', 'TRUE HISTORY BEING A MIXTURE OF ALL THINGS THE TRUE HISTORIAN MINGLES IN EVERYTHING', 'ALL THESE HONEST PERSONS ARE WAITING THEIR TURN TO GET THEIR SNUFF BOXES FILLED', 'SATURDAY AFTER SATURDAY COMES ROUND AND I CAN HAVE NO HOPE OF HEARING YOUR KNOCK AT THE DOOR AND THEN BEING TOLD THAT MISS E IS COME OH DEAR', 'PAUL ANSWERS THE MAN WHO IS NAMED JESUS CHRIST AND THE SON OF GOD GAVE HIMSELF FOR OUR SINS']

cross = ['1995-1837-0019', '2300-131720-0027', '3575-170457-0020', '1320-122617-0011', '672-122797-0055', '3575-170457-0003', '3570-5695-0008', '2830-3980-0051', '1580-141084-0048', '121-127105-0013', '1995-1836-0009', '1089-134686-0013', '1320-122617-0019', '61-70970-0035', '3570-5694-0018', '2961-960-0014', '4970-29095-0016', '1284-1180-0001', '2961-961-0010', '2094-142345-0039', '1284-1181-0014', '4970-29095-0004']
cross_txt = ['HE SAT DOWN WEAK BEWILDERED AND ONE THOUGHT WAS UPPERMOST ZORA', 'EDISON HELD THAT THE ELECTRICITY SOLD MUST BE MEASURED JUST LIKE GAS OR WATER AND HE PROCEEDED TO DEVELOP A METER', 'I KNOW THE FIRST LETTER I WROTE TO YOU WAS ALL SENSELESS TRASH FROM BEGINNING TO END BUT I AM NOT ALTOGETHER THE IDLE DREAMING BEING IT WOULD SEEM TO DENOTE', 'THE LODGE IN WHICH UNCAS WAS CONFINED WAS IN THE VERY CENTER OF THE VILLAGE AND IN A SITUATION PERHAPS MORE DIFFICULT THAN ANY OTHER TO APPROACH OR LEAVE WITHOUT OBSERVATION', 'AND THEN HE TOLD ALL ABOUT HIS YOUTH AND THE LITTLE MICE HAD NEVER HEARD THE LIKE BEFORE AND THEY LISTENED AND SAID', 'SURELY IT MUST BE BECAUSE WE ARE IN DANGER OF LOVING EACH OTHER TOO WELL OF LOSING SIGHT OF THE CREATOR IN IDOLATRY OF THE CREATURE', 'THE QUESTION IS WHICH OF THE TWO METHODS WILL MOST EFFECTIVELY REACH THE PERSONS WHOSE CONVICTIONS IT IS DESIRED TO AFFECT', 'WHEN YOU ARGUE ABOUT THE NATURE OF GOD APART FROM THE QUESTION OF JUSTIFICATION YOU MAY BE AS PROFOUND AS YOU LIKE', 'IT WILL BE CLEAR TO YOU FROM WHAT I HAVE SAID THAT ONLY YOU COULD HAVE LET THIS YOUNG MAN OUT SINCE YOU WERE LEFT IN THE ROOM AND MUST HAVE LOCKED THE DOOR WHEN YOU WENT OUT', "YOU'LL EASILY JUDGE WHY WHEN YOU HEAR BECAUSE THE THING HAD BEEN SUCH A SCARE HE CONTINUED TO FIX ME", 'BUT CRESSWELL ADDED SIGNIFICANTLY CAPACITY DIFFERS ENORMOUSLY BETWEEN RACES', 'IF EVER HE WAS IMPELLED TO CAST SIN FROM HIM AND TO REPENT THE IMPULSE THAT MOVED HIM WAS THE WISH TO BE HER KNIGHT', 'UNCAS OCCUPIED A DISTANT CORNER IN A RECLINING ATTITUDE BEING RIGIDLY BOUND BOTH HANDS AND FEET BY STRONG AND PAINFUL WITHES', "WARRENTON SPOKE THUS WITH SIGNIFICANCE TO SHOW ROBIN THAT HE WAS NOT TO THINK GEOFFREY'S CLAIMS TO THE ESTATE WOULD BE PASSED BY", 'THE WEARERS OF UNIFORMS AND LIVERIES MAY BE ROUGHLY DIVIDED INTO TWO CLASSES THE FREE AND THE SERVILE OR THE NOBLE AND THE IGNOBLE', 'THE IDEAS ALSO REMAIN BUT THEY HAVE BECOME TYPES IN NATURE FORMS OF MEN ANIMALS BIRDS FISHES', 'RUTH SAT QUITE STILL FOR A TIME WITH FACE INTENT AND FLUSHED IT WAS OUT NOW', 'HIS HAT HAD A PEAKED CROWN AND A FLAT BRIM AND AROUND THE BRIM WAS A ROW OF TINY GOLDEN BELLS THAT TINKLED WHEN HE MOVED', 'BUT IN EGYPT THE TRADITIONS OF OUR OWN AND OTHER LANDS ARE BY US REGISTERED FOR EVER IN OUR TEMPLES', "I'VE STRONG ASSURANCE THAT NO EVIL WILL HAPPEN TO YOU AND MY UNCLE AND THE CHILDREN FROM ANYTHING I'VE DONE", 'HE SELECTED A SMALL GOLD BOTTLE WITH A PEPPER BOX TOP SO THAT THE POWDER MIGHT BE SPRINKLED ON ANY OBJECT THROUGH THE SMALL HOLES', 'I HEARD FATHER TELL COUSIN ABNER THAT HE WAS WHIPPED SO OFTEN FOR WHISTLING WHEN HE WAS A BOY THAT HE WAS DETERMINED TO HAVE WHAT COMPENSATION HE COULD GET NOW']

hard = ['76', '61', '64', '81', '62', '31', '59', '93', '77', '2', '44', '97']
// hard_txt = ['76', '61', '64', '81', '62', '31', '59', '93', '77', '2', '44', '97']
hard_txt = ['Precision in decision-making is paramount, as an error could cost countless countless countless countless countless countless countless lives', 'As the cosmic cosmic cosmic cosmic cosmic cosmic dance of the stars unfolds in in in in in in silence, revealing the mystical mysteries of the celestial celestial celestial celestial celestial celestial realm', 'Beneath the moonlit night, the solitary wolf’s haunting howl howl howl howl howl echoed through the ancient forest, embodying the primal spirit of the wilderness.', 'The relentless relentless relentless relentless relentless relentless pursuit of perfection in in in in in in in in in craftsmanship led the artisan to create an exquisite masterpiece admired for its meticulous meticulous meticulous meticulous meticulous meticulous details.', 'As the quantum physicist delved into the quantum realm, the enigmatic entanglement of particles perplexed even the most astute astute astute astute astute astute minds.', 'Adventurous ants anxiously ate apples, adventurous adventurous apples.', 'Amidst the towering skyscrapers, the bustling cityscape echoed with the incessant hum hum hum hum hum of commerce and ambition.', 'Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop not to stop not to stop not to stop not to stop questioning.', 'Strategically strategizing strategy in the fast-paced world of e-sports demands a dexterous dexterous dexterous dexterous dexterous dexterous mind.', 'forty five to five hundred and eleven Fail - one to zero Cancelled - zero - zero Total', 'Excited elephants excitedly explored excited excited explorations.', 'Life is like a bicycle, to keep your balance, you must keep moving keep moving keep moving keep moving keep moving. The more you know, the more you realize you don’t know, but knowing that you don’t know is the beginning of wisdom.']



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
