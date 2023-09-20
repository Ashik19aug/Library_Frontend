export const Position = {
  center: 'justify-center items-center',
  centerRight: 'justify-end items-center',
};

const styles = {
  PrimaryBg: ' w-full overflow-hidden text-white bg-white-900 dark:bg-gradient-to-r from-slate-900/75 to-slate-900/75',//bg-gradient-to-r from-slate-900 to-slate-700

  ComponentBase: 'mb-4',//bg-gradient-to-r from-slate-300 to-slate-500
  ComponentBg: 'bg-gradient-to-r from-slate-900/75 to-slate-900/75 rounded-xl ',//bg-gradient-to-r from-slate-300 to-slate-500
  MultiComponentBg: 'flex flex-col-reverse laptop:flex-row justify-between rounded-xl bg-transparent drop-shadow-md hover:drop-shadow-lg mb-0',
  SocialSection: 'flex w-full h-[50px] hover:drop-shadow-xl rounded-xl',

  ItemListSection: 'flex w-full h-[500px] hover:drop-shadow-xl rounded-xl',
  NewItemSection: 'h-[500px] hover:drop-shadow-xl rounded-xl',
  NewItemGrid: 'grid grid-cols-3 laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-6 tablet:gap-3 mobile:gap-4 mb-4 h-fit',

  NavBase: `flex ${Position.center} hidden laptop:flex fixed w-full z-20 top-0 left-0 dark:border-gray-600 h-20 supports-backdrop-blur:bg-white/95 bg-gradient-to-r from-slate-900/95 to-slate-900/95 mb-4 rounded-xl`,
  NavBaseBottom: 'laptop:hidden fixed w-full z-20 bottom-0 left-0 dark:border-gray-600 h-20 supports-backdrop-blur:bg-white/95 bg-gradient-to-r from-slate-900/95 to-slate-900/95 rounded-xl mt-4',

  SliderBase: 'flex w-full overflow-hidden text-gray',

  ItemsLeftSection: 'w-full laptop:w-2/3 h-fit overflow-hidden laptop:pr-4 ',
  ItemsRightSection: 'w-full laptop:w-1/3 h-screen overflow-hidden mb-4 laptop:pb-0',

  FooterSection: 'w-1/3 h-[300px] overflow-hidden',
};

export const Size = {
  Slider: 'h-64 tablet:h-64 laptop:h-96 desktop:h-96 desktop:h-96',
};


// export const layout = {
//   test: `flex md:flex-row flex-col ${styles.paddingY}`,
// };

export default styles;
