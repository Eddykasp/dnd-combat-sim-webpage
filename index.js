const dnd = require('dnd-combat-simulator');
const $ = require('jquery');

$("#character_form").on("submit", function(event) {
  event.preventDefault();
  // create new combatant
  let id = $(this).find('[name=char_id]').val();
  let hp = Number($(this).find('[name=hp]').val());
  let ac = Number($(this).find('[name=ac]').val());
  let initiative = Number($(this).find('[name=initiative]').val());
  let atk = Number($(this).find('[name=atk]').val());
  let dmg = Number($(this).find('[name=dmg]').val());
  let dmg_dice = Number($(this).find('[name=dmg_dice]').val());
  let dmg_bonus = Number($(this).find('[name=dmg_bonus]').val());
  let new_combatant = new dnd.Combatant(id, hp, ac, initiative, atk, dmg, dmg_dice, dmg_bonus);

  console.log(new_combatant);

  // check if party exists
  let party_id = $(this).find('[name=party_id]').val();
  if (!combat.parties.hasOwnProperty(party_id)) {
    // create and add party
    let p = new dnd.Party();
    combat.addParty(p, party_id);
  }
  // add new combatant to party
  combat.parties[party_id].addMember(new_combatant);
});

$("#run_simulation").on("click", function(event) {
  combat.runFight(console.log);
});

let combat = new dnd.Combat();
