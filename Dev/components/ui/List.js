import React,{Component} from 'react'


export default class List extends Component{

	constructor(props) {
		super(props)

		var _json = this.props.data;

		if (!_json) {

			_json = [];
		}
		this.state = {

			data: _json,
			total:this.props.totalCount,
			isFetching:_json.length>0? false: true,
			page:this.props.page,
			pageSize:this.props.pageSize,
			isReload:_json.length>0? false: true

		}
	}

 componentWillMount()
  {


  if(!this.props.data || this.props.data.length==0){
     this.fetchData();
  }
    
  }


 renderComplted(){

 	if(this.props.onRenderCompleted){
  		this.props.onRenderCompleted()
  	}
 }
  componentDidMount(){
  	
  	this.renderComplted()
  }

	fetchData(onSetDataSource) 
	{


		if (this.props.onFetch) {
			this.setState({
				isFetching: true
			})

			var searchItems= this.props.setSearchItems  ? this.props.setSearchItems(this):[];
			this.props.onFetch(searchItems, this.state.page, this.state.pageSize, function(data) {
				if (!onSetDataSource) {
					onSetDataSource = function(data) {
					
						var __data ={
							data: data.List,
							totalCount: data.TotalCount,
							isFetching: false,isReload:false
						}
                  
						this.setState(__data);
                        this.renderComplted()
						return __data;
						
					}.bind(this);
				}
			 return	onSetDataSource(data);
			}.bind(this))
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.isReload) {
			// disabled这个属性改变了
			this.setState({
				isReload: true,data:[],totalCount:0
			})
			this.fetchData();

			//this.props.isReload=false;
		}
	}
	
	renderItem(item,index) 
	{
		if (this.props.onRenderItem) 
		{
			return this.props.onRenderItem(item);
		}
		return <span > {
			item
		} </span>;
	}
	renderLastItem(){


        
		if(this.state.pageSize* this.state.page>=this.state.totalCount){
			return <div>{this.props.noMore}</div>
		}
		return <div className="well well-sm" style={{marginBottom:'1px',marginTop:'1px',textAlign:'center'}} onClick={()=>{
				this.state.page += 1;
				this.fetchData(function(data){
                     var orgdata= this.state.data;
                     var newData= orgdata.concat(data.List);

                     var __data={data:newData,totalCount:data.TotalCount};
                     __data.isFetching=false;
                    this.setState(__data);
                    return __data;
				}.bind(this));
		}.bind(this)}> {this.state.isFetching?this.props.fetching: this.props.fetchMore}</div>
	}
    render(){


          if(this.state.isReload){

	        return <div className="well well-sm center">{this.props.fetching}</div>
      }
    	if(this.props.onRenderBefore){
    		this.props.onRenderBefore();
    	}
		
		
  return (<div ref="list" className={this.props.className} style={this.props.style}><ul style={{marginBottom:'1px'}} className="list-group">{
    	   this.state.data.map((item,index)=>{
            return (<li key={index} className="list-group-item" 
            	onClick={(e)=>{
            	if(this.props.onItemClick){
            		this.props.onItemClick(item,index)
            	}
            }.bind(this,item)}> 
            {
            	this.renderItem(item,index)
            } 
            </li>)
    	   })
      	 } 
      	 </ul>{this.renderLastItem()}</div>)
    }

}


List.defaultProps={
   data:null,
   pageSize:30,
   page:1,
   onRenderItem:null,
   onFetch:React.PropTypes.func,
   fetchMore:'获取更多',
   fetching:'数据加载中....',
   noMore:'',
   className:'list',
   onItemClick:null,
   onRenderBefore:null,
   isReload:false,
   setSearchItems:null,
   onRenderCompleted:null

}
List.propTypes=
{
    onRenderItem:React.PropTypes.func,
    setSearchItems:React.PropTypes.func
}