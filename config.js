const TOKEN = "940c3fccb1ae3d30e7ecc213ffb8d8e215caa91fb1574381b6fce7d125e08638993a9e7998b0a0ee1e19d"; // 苠郋郕迮郇 迣��郈郈�, 赲 郕郋�郋�郋邿 訇�迡迮� ��郋��� 訇郋�
const GROUP_ID = 202380180; // �邿迡邽 迣��郈郈�, 赲 郕郋�郋�郋邿 訇�迡迮� ��郋��� 訇郋�
const BTN_TEXT = ["vto.pe", "vkbot.ru", "vkbot.ru"];
const TIME = 500;
const CHAT_SPAM = ["�����不�����������������������������綾�拎劾���塔����突�♀�痰�梗�突�攻手��丐�丐�之����������������鳶�鳶�屢�賅�鳶����拎�湘�佞�剁蕭1嚙�1�77嚙賤�儭�剁蕭1嚙�1�77嚙踢�����喉����儭�莞�喉蕭1嚙�1�77嚙賤�儭�喫湘�蛤��抬蕭1嚙�1�77嚙踢�歹����歹����鳴����鳴�������儭�荊�蕭1嚙�1�77嚙賤�儭�蕭1嚙�1�77嚙賤�儭�蕭1嚙�1�77嚙賤�儭��元��儭�蕭1嚙�1�77嚙賤�儭��蛤屢樹滕屢樹��������������������������佞�劾�休���毋����唐�����突�遲�����喫����賅�痰�賅��氣�蛤�攻�毋��喫�遲�����������������������賅�賅���綾�綾�氯�聆�抽�����劾��返�賅��拎����♀�休����踢�踢�算�����������������������������������������������������������������痰��荊�����踢�汕抽�����喫�氯�����������������漎�佞�突�拎�喉蕭1嚙�1�77嚙踢������儭��1�71嚙�1�77�����不�����������������������������綾�拎劾���塔����突�♀�痰�梗�突�攻手��丐�丐�之����������������鳶�鳶�屢�賅�鳶����拎�湘�佞�剁蕭1嚙�1�77嚙賤�儭�剁蕭1嚙�1�77嚙踢�����喉����儭�莞�喉蕭1嚙�1�77嚙賤�儭�喫湘�蛤��抬蕭1嚙�1�77嚙踢�歹����歹����鳴����鳴�������儭�荊�蕭1嚙�1�77嚙賤�儭�蕭1嚙�1�77嚙賤�儭�蕭1嚙�1�77嚙賤�儭��元��儭�蕭1嚙�1�77嚙賤�儭��蛤屢樹滕屢樹��������������������������佞�劾�休���毋����唐�����突�遲�����喫����賅�痰�賅��氣�蛤�攻�毋��喫�遲�����������������������賅�賅���綾�綾�氯�聆�抽�����劾��返�賅��拎����♀�休����踢�踢�算�����������������������������������������������������������������痰��荊�����踢�汕抽�����喫�氯�����������������漎�佞�突�拎�喉蕭1嚙�1�77嚙踢������儭��1�71嚙�1�77�����不�����������������������������綾�拎劾���塔����突�♀�痰�梗�突�攻手��丐�丐�之����������������鳶�鳶�屢�賅�鳶����拎�湘�佞�剁蕭1嚙�1�77嚙賤�儭�剁蕭1嚙�1�77嚙踢�����喉����儭�莞�喉蕭1嚙�1�77嚙賤�儭�喫湘�蛤��抬蕭1嚙�1�77嚙踢�歹����歹����鳴����鳴�������儭�荊�蕭1嚙�1�77嚙賤�儭�蕭1嚙�1�77嚙賤�儭�蕭1嚙�1�77嚙賤�儭��元��儭�蕭1嚙�1�77嚙賤�儭��蛤屢樹滕屢樹��������������������������佞�劾�休���毋����唐�����突�遲�����喫����賅�痰�賅��氣�蛤�攻�毋��喫�遲�����������������������賅�賅���綾�綾�氯�聆�抽�����劾��返�賅��拎����♀�休����踢�踢�算�����������������������������������������������������������������痰��荊�����踢�汕抽�����喫�氯�����������������漎�佞�突�拎�喉蕭1嚙�1�77嚙踢������儭��1�71嚙�1�77�����不�����������������������������綾�拎劾���塔����突�♀�痰�梗�突�攻手��丐�丐�之����������������鳶�鳶�屢�賅�鳶����拎�湘�佞�剁蕭1嚙�1�77嚙賤�儭�剁蕭1嚙�1�77嚙踢�����喉����儭�莞�喉蕭1嚙�1�77嚙賤�儭�喫湘�蛤��抬蕭1嚙�1�77嚙踢�歹����歹����鳴����鳴�������儭�荊�蕭1嚙�1�77嚙賤�儭�蕭1嚙�1�77嚙賤�儭�蕭1嚙�1�77嚙賤�儭��元��儭�蕭1嚙�1�77嚙賤�儭��蛤屢樹滕屢樹�����1�71嚙�1�77 �訄�� �訄�� �訇訄郅", "�����不�����������������������������綾�拎劾���塔����突�♀�痰�梗�突�攻手��丐�丐�之����������������鳶�鳶�屢�賅�鳶����拎�湘�佞�剁蕭1嚙�1�77嚙賤�儭�剁蕭1嚙�1�77嚙踢�����喉����儭�莞�喉蕭1嚙�1�77嚙賤�儭�喫湘�蛤��抬蕭1嚙�1�77嚙踢�歹����歹����鳴����鳴�������儭�荊�蕭1嚙�1�77嚙賤�儭�蕭1嚙�1�77嚙賤�儭�蕭1嚙�1�77嚙賤�儭��元��儭�蕭1嚙�1�77嚙賤�儭��蛤屢樹滕屢樹��������������������������佞�劾�休���毋����唐�����突�遲�����喫����賅�痰�賅��氣�蛤�攻�毋��喫�遲�����������������������賅�賅���綾�綾�氯�聆�抽�����劾��返�賅��拎����♀�休����踢�踢�算�����������������������������������������������������������������痰��荊�����踢�汕抽�����喫�氯�����������������漎�佞�突�拎�喉蕭1嚙�1�77嚙踢������儭��1�71嚙�1�77�����不�����������������������������綾�拎劾���塔����突�♀�痰�梗�突�攻手��丐�丐�之����������������鳶�鳶�屢�賅�鳶����拎�湘�佞�剁蕭1嚙�1�77嚙賤�儭�剁蕭1嚙�1�77嚙踢�����喉����儭�莞�喉蕭1嚙�1�77嚙賤�儭�喫湘�蛤��抬蕭1嚙�1�77嚙踢�歹����歹����鳴����鳴�������儭�荊�蕭1嚙�1�77嚙賤�儭�蕭1嚙�1�77嚙賤�儭�蕭1嚙�1�77嚙賤�儭��元��儭�蕭1嚙�1�77嚙賤�儭��蛤屢樹滕屢樹��������������������������佞�劾�休���毋����唐�����突�遲�����喫����賅�痰�賅��氣�蛤�攻�毋��喫�遲�����������������������賅�賅���綾�綾�氯�聆�抽�����劾��返�賅��拎����♀�休����踢�踢�算�����������������������������������������������������������������痰��荊�����踢�汕抽�����喫�氯�����������������漎�佞�突�拎�喉蕭1嚙�1�77嚙踢������儭��1�71嚙�1�77�����不�����������������������������綾�拎劾���塔����突�♀�痰�梗�突�攻手��丐�丐�之����������������鳶�鳶�屢�賅�鳶����拎�湘�佞�剁蕭1嚙�1�77嚙賤�儭�剁蕭1嚙�1�77嚙踢�����喉����儭�莞�喉蕭1嚙�1�77嚙賤�儭�喫湘�蛤��抬蕭1嚙�1�77嚙踢�歹����歹����鳴����鳴�������儭�荊�蕭1嚙�1�77嚙賤�儭�蕭1嚙�1�77嚙賤�儭�蕭1嚙�1�77嚙賤�儭��元��儭�蕭1嚙�1�77嚙賤�儭��蛤屢樹滕屢樹��������������������������佞�劾�休���毋����唐�����突�遲�����喫����賅�痰�賅��氣�蛤�攻�毋��喫�遲�����������������������賅�賅���綾�綾�氯�聆�抽�����劾��返�賅��拎����♀�休����踢�踢�算�����������������������������������������������������������������痰��荊�����踢�汕抽�����喫�氯�����������������漎�佞�突�拎�喉蕭1嚙�1�77嚙踢������儭��1�71嚙�1�77�����不�����������������������������綾�拎劾���塔����突�♀�痰�梗�突�攻手��丐�丐�之����������������鳶�鳶�屢�賅�鳶����拎�湘�佞�剁蕭1嚙�1�77嚙賤�儭�剁蕭1嚙�1�77嚙踢�����喉����儭�莞�喉蕭1嚙�1�77嚙賤�儭�喫湘�蛤��抬蕭1嚙�1�77嚙踢�歹����歹����鳴����鳴�������儭�荊�蕭1嚙�1�77嚙賤�儭�蕭1嚙�1�77嚙賤�儭�蕭1嚙�1�77嚙賤�儭��元��儭�蕭1嚙�1�77嚙賤�儭��蛤屢樹滕屢樹�����1�71嚙�1�77 苭苺����苠衎 ��",
"�苺 虴� 苤衎��� 虼����, 觓 ��苤 ��觓� � ����衧��� ���苤苠�������不�����������������������������綾�拎劾���塔����突�♀�痰�梗�突�攻手��丐�丐�之����������������鳶�鳶�屢�賅�鳶����拎�湘�佞�兩�1�7�儭�兩�1�7�����喉����儭�莞�喇�1�7�儭�喫湘�蛤��抽�1�7�歹����歹����鳴����鳴�������儭�荊��1�7�儭��1�7�儭��1�7�儭��元��儭��1�7�儭��蛤屢樹滕屢樹��������������������������佞�劾�休���毋����唐�����突�遲�����喫����賅�痰�賅��氣�蛤�攻�毋��喫�遲�����������������������賅�賅���綾�綾�氯�聆�抽�����劾��返�賅��拎����♀�休����踢�踢�算�����������������������������������������������������������������痰��荊�����踢�汕抽�����喫�氯�����������������漎�佞�突�拎�喇�1�7������儭��1�7�����不�����������������������������綾�拎劾���塔����突�♀�痰�梗�突�攻手��丐�丐�之����������������鳶�鳶�屢�賅�鳶����拎�湘�佞�兩�1�7�儭�兩�1�7�����喉����儭�莞�喇�1�7�儭�喫湘�蛤��抽�1�7�歹����歹����鳴����鳴�������儭�荊��1�7�儭��1�7�儭��1�7�儭��元��儭��1�7�儭��蛤屢樹滕屢樹��������������������������佞�劾�休���毋����唐�����突�遲�����喫����賅�痰�賅��氣�蛤�攻�毋��喫�遲�����������������������賅�賅���綾�綾�氯�聆�抽�����劾��返�賅��拎����♀�休����踢�踢�算�����������������������������������������������������������������痰��荊�����踢�汕抽�����喫�氯�����������������漎�佞�突�拎�喇�1�7������儭��1�7�����不�����������������������������綾�拎劾���塔����突�♀�痰�梗�突�攻手��丐�丐�之����������������鳶�鳶�屢�賅�鳶����拎�湘�佞�兩�1�7�儭�兩�1�7�����喉����儭�莞�喇�1�7�儭�喫湘�蛤��抽�1�7�歹����歹����鳴����鳴�������儭�荊��1�7�儭��1�7�儭��1�7�儭��元��儭��1�7�儭��蛤屢樹滕屢樹��������������������������佞�劾�休���毋����唐�����突�遲�����喫����賅�痰�賅��氣�蛤�攻�毋��喫�遲�����������������������賅�賅���綾�綾�氯�聆�抽�����劾��返�賅��拎����♀�休����踢�踢�算�����������������������������������������������������������������痰��荊�����踢�汕抽�����喫�氯�����������������漎�佞�突�拎�喇�1�7������儭��1�7�����不�����������������������������綾�拎劾���塔����突�♀�痰�梗�突�攻手��丐�丐�之����������������鳶�鳶�屢�賅�鳶����拎�湘�佞�兩�1�7�儭�兩�1�7�����喉����儭�莞�喇�1�7�儭�喫湘�蛤��抽�1�7�歹����歹����鳴����鳴�������儭�荊��1�7�儭��1�7�儭��1�7�儭��元��儭��1�7�儭��蛤屢樹滕屢樹��������������������������佞�劾�休���毋����唐�����突�遲�����喫����賅�痰�賅��氣�蛤�攻�毋��喫�遲�����������������������賅�賅���綾�綾�氯�聆�抽�����劾��返�賅��拎����♀�休����踢�踢�算�����������������������������������������������������������������痰��荊�����踢�汕抽�����喫�氯�����������������漎�佞�突�拎�喇�1�7������儭��1�7�����不�����������������������������綾�拎劾���塔����突�♀�痰�梗�突�攻手��丐�丐�之����������������鳶�鳶�屢�賅�鳶����拎�湘�佞�兩�1�7�儭�兩�1�7�����喉����儭�莞�喇�1�7�儭�喫湘�蛤��抽�1�7�歹����歹����鳴����鳴�������儭�荊��1�7�儭��1�7�儭��1�7�儭��元��儭��1�7�儭��蛤屢樹滕屢樹��������������������������佞�劾�休���毋����唐�����突�遲�����喫����賅�痰�賅��氣�蛤�攻�毋��喫�遲�����������������������賅�賅���綾�綾�氯�聆�抽�����劾��返�賅��拎����♀�休����踢�踢�算�����������������������������������������������������������������痰��荊�����踢�汕抽�����喫�氯��",
"苤�苺��苠� �� 虼����衎 ������������������������","������������圾�������������������������������������������������������������������������������������������������������������������算�聆�拎�荊�荊�荊�色�������������������������湘��拎�������毋����鳶�屢�ｈ�荊�毋����莞�唐��賅�痰�埠�荊��栽��������������屢�埠�攻�喫��������������穢�������������荊�綾��屢���喫�湘�賅�猾������������儭��1�7�����不�����������������������������綾�拎劾���塔����突�♀�痰�梗�突�攻手��丐�丐�之����������������鳶�鳶�屢�賅�鳶����拎�湘�佞�兩�1�7�儭�兩�1�7�����喉����儭�莞�喇�1�7�儭�喫湘�蛤��抽�1�7�歹����歹����鳴����鳴�������儭�荊��1�7�儭��1�7�儭��1�7�儭��元��儭��1�7�儭��蛤屢樹滕屢樹��������������������������佞�劾�休���毋����唐�����突�遲�����喫����賅�痰�賅��氣�蛤�攻�毋��喫�遲�����������������������賅�賅���綾�綾�氯�聆�抽�����劾��返�賅��拎����♀�休����踢�踢�算�����������������������������������������������������������������痰��荊�����踢�汕抽�����喫�氯�����������������漎�佞�突�拎�喇�1�7������儭��1�7�����不�����������������������������綾�拎劾���塔����突�♀�痰�梗�突�攻手��丐�丐�之����������������鳶�鳶�屢�賅�鳶����拎�湘�佞�兩�1�7�儭�兩�1�7�����喉����儭�莞�喇�1�7�儭�喫湘�蛤��抽�1�7�歹����歹����鳴����鳴�������儭�荊��1�7�儭��1�7�儭��1�7�儭��元��儭��1�7�儭��蛤屢樹滕屢樹��������������������������佞�劾�休���毋����唐�����突�遲�����喫����賅�痰�賅��氣�蛤�攻�毋��喫�遲�����������������������賅�賅���綾�綾��1�7" ,
"������������圾�������������������������������������������������������������������������������������������������������������������算�聆�拎�荊�荊�荊�色�������������������������湘��拎�������毋����鳶�屢�ｈ�荊�毋����莞�唐��賅�痰�埠�荊��栽��������������屢�埠�攻�喫��������������穢�������������荊�綾��屢���喫�湘�賅�猾������������儭��1�7�����不�����������������������������綾�拎劾���塔����突�♀�痰�梗�突�攻手��丐�丐�之����������������鳶�鳶�屢�賅�鳶����拎�湘�佞�兩�1�7�儭�兩�1�7�����喉����儭�莞�喇�1�7�儭�喫湘�蛤��抽�1�7�歹����歹����鳴����鳴�������儭�荊��1�7�儭��1�7�儭��1�7�儭��元��儭��1�7�儭��蛤屢樹滕屢樹��������������������������佞�劾�休���毋����唐�����突�遲�����喫����賅�痰�賅��氣�蛤�攻�毋��喫�遲�����������������������賅�賅���綾�綾�氯�聆�抽�����劾��返�賅��拎����♀�休����踢�踢�算�����������������������������������������������������������������痰��荊�����踢�汕抽�����喫�氯�����������������漎�佞�突�拎�喇�1�7������儭��1�7�����不�����������������������������綾�拎劾���塔����突�♀�痰�梗�突�攻手��丐�丐�之����������������鳶�鳶�屢�賅�鳶����拎�湘�佞�兩�1�7�儭�兩�1�7�����喉����儭�莞�喇�1�7�儭�喫湘�蛤��抽�1�7�歹����歹����鳴����鳴�������儭�荊��1�7�儭��1�7�儭��1�7�儭��元��儭��1�7�儭��蛤屢樹滕屢樹��������������������������佞�劾�休���毋����唐�����突�遲�����喫����賅�痰�賅��氣�蛤�攻�毋��喫�遲�����������������������賅�賅���綾�綾��1�7 �訄�� �訇訄郅 虼����衎 ���訄訄��訄�訄訄訄�訄��訄��訄�訄訄�訄�訄�訄�訄�訄�訄�訄�訄��訄訄�訄�訄�訄��訄訄�訄�������������綾������綾�����������喫喫喫喫��拎��塔��蛤蛤��毋毋突突�佞�佞�埠�蛤�埠�蛤�屢�綾攻�綾�綾�綾�綾�綾�綾�鳶�樹�鳶�樹�鳶��屢�樹�綾�屢�屢莞�滕�嫖�儭�綾�踢�樹�樹�樹�樹�樹�樹莞�樹莞莞�樹莞�樹莞�滕�屢�賅��綾�踢�����������嗯�����������������������芬�������",]
const HELLO_TEXT = `АНАЛЬНЫЙ ТЕРМИНАТОР. 
`;

module.exports = {
    TOKEN, CHAT_SPAM, GROUP_ID, BTN_TEXT, HELLO_TEXT, TIME
};
