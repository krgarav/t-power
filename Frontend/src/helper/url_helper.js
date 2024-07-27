const url = "http://192.168.0.146:8000/"
// const url = "http://localhost:8000/"
// const url = "http://backend:8000/"



export const CREATE_USER = url + "createUser"
export const UPDATE_USER = url + "updateUser/"
export const GET_USERS = url + "getAllUsers"
export const LOGIN = url + "Login"
export const DELETE_USER = url + "deleteUser/"
export const GET_USER_ROLES = url + "GetUserRole"


export const SAVE_FILE_DATA = url + "saveFileData";
export const GET_ALL_FILEDATA = url + "getAllFilesData";
export const GET_FILE_DETAIL_DATA = url + "getFileDetailData";
export const GET_FILTER_FILES = url + "getFilterFiles";

export const PRINT_BARCODE = url + "printBarcode";

export const GET_ANALYSIS_DATA = url + "getAnalysisData";
export const DOWNLOAD_DATA_CSV = url + "downloadDataCsv";
export const DOWNLOAD_ZIP_FILE = url + "downloadZipFile";
export const DOWNLOAD_PDF = url + "downloadPdf";

export const EXTRACT_PDF = url + "extractPdf";

export const ADD_FILE_TO_WAREHOUSE = url + "addFile";
export const ISSUE_FILE = url + "issueFile";
export const RETURN_FILE = url + "returnFile";
export const GET_FILE_DATA_FROM_BARCODE = url + "getFileDataFromBarcode"


export const CREATE_PDF_FROM_IMAGES = url + "convertImagesToPdf";



export const GET_PROCESS_DATA = url + "ProcessData";
export const SCAN_FILES = url + "ScanFiles";
export const REFRESH_SCANNER = url + "RefreshScanner"


export const GET_PROCESS_24_PAGE_DATA = url + "Process_24_Page_Booklet_Data";
export const SCAN_24_PAGE_FILES = url + "Scan_24_Page_Booklet";


export const GET_PROCESS_32_PAG_DATA = url + "Process_32_Page_Booklet_Data";
export const SCAN_32_PAGE_FILES = url + "Scan_32_Page_Booklet";
