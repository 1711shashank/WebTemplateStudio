import { createSelector } from "reselect";
import { AppState } from "../../combineReducers";
import { ModalType, NAVIGATION_MODAL_TYPES } from "../typeKeys";

const getOpenModal = (state: AppState): ModalType =>
  state.navigation.modals.openModal.modalType;
const isAzureLoginModalOpen = (modal: ModalType): boolean =>
  modal === NAVIGATION_MODAL_TYPES.AZURE_LOGIN_MODAL;
const isCosmosDbModalOpen = (modal: ModalType): boolean =>
  modal === NAVIGATION_MODAL_TYPES.COSMOS_DB_MODAL;
const isGenModalOpen = (modal: ModalType): boolean =>
  modal === NAVIGATION_MODAL_TYPES.GEN_MODAL;
const isViewLicensesModalOpen = (modal: ModalType): boolean =>
  modal === NAVIGATION_MODAL_TYPES.VIEW_LICENSES_MODAL;
const isAppServiceModalOpen = (modal: ModalType): boolean =>
  modal === NAVIGATION_MODAL_TYPES.APP_SERVICE_MODAL;
const isAddPagesModalOpen = (modal: ModalType): boolean =>
  modal === NAVIGATION_MODAL_TYPES.ADD_PAGES_MODAL;

const isAzureLoginModalOpenSelector = createSelector(
  getOpenModal,
  isAzureLoginModalOpen
);

const isCosmosDbModalOpenSelector = createSelector(
  getOpenModal,
  isCosmosDbModalOpen
);

const isGenModalOpenSelector = createSelector(
  getOpenModal,
  isGenModalOpen
);

const isViewLicensesModalOpenSelector = createSelector(
  getOpenModal,
  isViewLicensesModalOpen
);

const isAppServiceModalOpenSelector = createSelector(
  getOpenModal,
  isAppServiceModalOpen
);

const isAddPagesModalOpenSelector = createSelector(
  getOpenModal,
  isAddPagesModalOpen
);

export {
  isAzureLoginModalOpenSelector,
  isCosmosDbModalOpenSelector,
  isGenModalOpenSelector,
  isViewLicensesModalOpenSelector,
  isAppServiceModalOpenSelector,
  isAddPagesModalOpenSelector
};
