"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,_=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return n?l.createElement(_,a(a({ref:t},m),{},{components:n})):l.createElement(_,a({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<r;u++)a[u]=n[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9594:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=n(3117),i=(n(7294),n(3905));const r={sidebar_label:"retrieve_utils",title:"retrieve_utils"},a=void 0,o={unversionedId:"reference/retrieve_utils",id:"reference/retrieve_utils",isDocsHomePage:!1,title:"retrieve_utils",description:"UNSTRUCTURED\\_FORMATS",source:"@site/docs/reference/retrieve_utils.md",sourceDirName:"reference",slug:"/reference/retrieve_utils",permalink:"/autogen/docs/reference/retrieve_utils",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/retrieve_utils.md",tags:[],version:"current",frontMatter:{sidebar_label:"retrieve_utils",title:"retrieve_utils"},sidebar:"referenceSideBar",previous:{title:"math_utils",permalink:"/autogen/docs/reference/math_utils"},next:{title:"token_count_utils",permalink:"/autogen/docs/reference/token_count_utils"}},s=[{value:"UNSTRUCTURED_FORMATS",id:"unstructured_formats",children:[],level:4},{value:"split_text_to_chunks",id:"split_text_to_chunks",children:[],level:4},{value:"extract_text_from_pdf",id:"extract_text_from_pdf",children:[],level:4},{value:"split_files_to_chunks",id:"split_files_to_chunks",children:[],level:4},{value:"get_files_from_dir",id:"get_files_from_dir",children:[],level:4},{value:"get_file_from_url",id:"get_file_from_url",children:[],level:4},{value:"is_url",id:"is_url",children:[],level:4},{value:"create_vector_db_from_dir",id:"create_vector_db_from_dir",children:[],level:4},{value:"query_vector_db",id:"query_vector_db",children:[],level:4}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"unstructured_formats"},"UNSTRUCTURED","_","FORMATS"),(0,i.kt)("p",null,"These formats will be parsed by the 'unstructured' library, if installed."),(0,i.kt)("h4",{id:"split_text_to_chunks"},"split","_","text","_","to","_","chunks"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def split_text_to_chunks(text: str,\n                         max_tokens: int = 4000,\n                         chunk_mode: str = "multi_lines",\n                         must_break_at_empty_line: bool = True,\n                         overlap: int = 10)\n')),(0,i.kt)("p",null,"Split a long text into chunks of max_tokens."),(0,i.kt)("h4",{id:"extract_text_from_pdf"},"extract","_","text","_","from","_","pdf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def extract_text_from_pdf(file: str) -> str\n")),(0,i.kt)("p",null,"Extract text from PDF files"),(0,i.kt)("h4",{id:"split_files_to_chunks"},"split","_","files","_","to","_","chunks"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def split_files_to_chunks(files: list,\n                          max_tokens: int = 4000,\n                          chunk_mode: str = "multi_lines",\n                          must_break_at_empty_line: bool = True,\n                          custom_text_split_function: Callable = None)\n')),(0,i.kt)("p",null,"Split a list of files into chunks of max_tokens."),(0,i.kt)("h4",{id:"get_files_from_dir"},"get","_","files","_","from","_","dir"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def get_files_from_dir(dir_path: Union[str, List[str]],\n                       types: list = TEXT_FORMATS,\n                       recursive: bool = True)\n")),(0,i.kt)("p",null,"Return a list of all the files in a given directory, a url, a file path or a list of them."),(0,i.kt)("h4",{id:"get_file_from_url"},"get","_","file","_","from","_","url"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def get_file_from_url(url: str, save_path: str = None)\n")),(0,i.kt)("p",null,"Download a file from a URL."),(0,i.kt)("h4",{id:"is_url"},"is","_","url"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def is_url(string: str)\n")),(0,i.kt)("p",null,"Return True if the string is a valid URL."),(0,i.kt)("h4",{id:"create_vector_db_from_dir"},"create","_","vector","_","db","_","from","_","dir"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def create_vector_db_from_dir(dir_path: Union[str, List[str]],\n                              max_tokens: int = 4000,\n                              client: API = None,\n                              db_path: str = "/tmp/chromadb.db",\n                              collection_name: str = "all-my-documents",\n                              get_or_create: bool = False,\n                              chunk_mode: str = "multi_lines",\n                              must_break_at_empty_line: bool = True,\n                              embedding_model: str = "all-MiniLM-L6-v2",\n                              embedding_function: Callable = None,\n                              custom_text_split_function: Callable = None,\n                              custom_text_types: List[str] = TEXT_FORMATS,\n                              recursive: bool = True,\n                              extra_docs: bool = False) -> API\n')),(0,i.kt)("p",null,"Create a vector db from all the files in a given directory, the directory can also be a single file or a url to\na single file. We support chromadb compatible APIs to create the vector db, this function is not required if\nyou prepared your own vector db."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dir_path")," ",(0,i.kt)("em",{parentName:"li"},"Union[str, List","[str]","]")," - the path to the directory, file, url or a list of them."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_tokens")," ",(0,i.kt)("em",{parentName:"li"},"Optional, int")," - the maximum number of tokens per chunk. Default is 4000."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client")," ",(0,i.kt)("em",{parentName:"li"},"Optional, API")," - the chromadb client. Default is None."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"db_path")," ",(0,i.kt)("em",{parentName:"li"},"Optional, str"),' - the path to the chromadb. Default is "/tmp/chromadb.db".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection_name")," ",(0,i.kt)("em",{parentName:"li"},"Optional, str"),' - the name of the collection. Default is "all-my-documents".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"get_or_create")," ",(0,i.kt)("em",{parentName:"li"},"Optional, bool")," - Whether to get or create the collection. Default is False. If True, the collection\nwill be returned if it already exists. Will raise ValueError if the collection already exists and get_or_create is False."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chunk_mode")," ",(0,i.kt)("em",{parentName:"li"},"Optional, str"),' - the chunk mode. Default is "multi_lines".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"must_break_at_empty_line")," ",(0,i.kt)("em",{parentName:"li"},"Optional, bool")," - Whether to break at empty line. Default is True."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"embedding_model")," ",(0,i.kt)("em",{parentName:"li"},"Optional, str"),' - the embedding model to use. Default is "all-MiniLM-L6-v2". Will be ignored if\nembedding_function is not None.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"embedding_function")," ",(0,i.kt)("em",{parentName:"li"},"Optional, Callable")," - the embedding function to use. Default is None, SentenceTransformer with\nthe given ",(0,i.kt)("inlineCode",{parentName:"li"},"embedding_model")," will be used. If you want to use OpenAI, Cohere, HuggingFace or other embedding\nfunctions, you can pass it here, follow the examples in ",(0,i.kt)("inlineCode",{parentName:"li"},"https://docs.trychroma.com/embeddings"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"custom_text_split_function")," ",(0,i.kt)("em",{parentName:"li"},"Optional, Callable")," - a custom function to split a string into a list of strings.\nDefault is None, will use the default function in ",(0,i.kt)("inlineCode",{parentName:"li"},"autogen.retrieve_utils.split_text_to_chunks"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"custom_text_types")," ",(0,i.kt)("em",{parentName:"li"},"Optional, List","[str]")," - a list of file types to be processed. Default is TEXT_FORMATS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"recursive")," ",(0,i.kt)("em",{parentName:"li"},"Optional, bool")," - whether to search documents recursively in the dir_path. Default is True."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"extra_docs")," ",(0,i.kt)("em",{parentName:"li"},"Optional, bool")," - whether to add more documents in the collection. Default is False")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"API")," - the chromadb client.")),(0,i.kt)("h4",{id:"query_vector_db"},"query","_","vector","_","db"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def query_vector_db(query_texts: List[str],\n                    n_results: int = 10,\n                    client: API = None,\n                    db_path: str = "/tmp/chromadb.db",\n                    collection_name: str = "all-my-documents",\n                    search_string: str = "",\n                    embedding_model: str = "all-MiniLM-L6-v2",\n                    embedding_function: Callable = None) -> QueryResult\n')),(0,i.kt)("p",null,"Query a vector db. We support chromadb compatible APIs, it's not required if you prepared your own vector db\nand query function."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_texts")," ",(0,i.kt)("em",{parentName:"li"},"List","[str]")," - the list of strings which will be used to query the vector db."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n_results")," ",(0,i.kt)("em",{parentName:"li"},"Optional, int")," - the number of results to return. Default is 10."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client")," ",(0,i.kt)("em",{parentName:"li"},"Optional, API")," - the chromadb compatible client. Default is None, a chromadb client will be used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"db_path")," ",(0,i.kt)("em",{parentName:"li"},"Optional, str"),' - the path to the vector db. Default is "/tmp/chromadb.db".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection_name")," ",(0,i.kt)("em",{parentName:"li"},"Optional, str"),' - the name of the collection. Default is "all-my-documents".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"search_string")," ",(0,i.kt)("em",{parentName:"li"},"Optional, str"),' - the search string. Only docs that contain an exact match of this string will be retrieved. Default is "".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"embedding_model")," ",(0,i.kt)("em",{parentName:"li"},"Optional, str"),' - the embedding model to use. Default is "all-MiniLM-L6-v2". Will be ignored if\nembedding_function is not None.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"embedding_function")," ",(0,i.kt)("em",{parentName:"li"},"Optional, Callable")," - the embedding function to use. Default is None, SentenceTransformer with\nthe given ",(0,i.kt)("inlineCode",{parentName:"li"},"embedding_model")," will be used. If you want to use OpenAI, Cohere, HuggingFace or other embedding\nfunctions, you can pass it here, follow the examples in ",(0,i.kt)("inlineCode",{parentName:"li"},"https://docs.trychroma.com/embeddings"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"QueryResult")," - the query result. The format is:\nclass QueryResult(TypedDict):"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ids")," - List","[IDs]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"embeddings")," - Optional[List[List","[Embedding]","]]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"documents")," - Optional[List[List","[Document]","]]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metadatas")," - Optional[List[List","[Metadata]","]]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"distances")," - Optional[List[List","[float]","]]")))}m.isMDXComponent=!0}}]);