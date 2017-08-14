<template>
  <div class="setInput">
		<el-form :label-position="labelPosition" label-width="110px" :model="formLabelAlign">			  
		  <el-form-item label="输入源类型" required> 
		  	 <el-col :span="11">
		        <el-select v-model="formLabelAlign.inputType" placeholder="输入源类型">
				      <el-option label="拉流" value="拉流"></el-option>
				      <el-option label="推流" value="推流"></el-option>
				    </el-select>
				 </el-col>				 
			</el-form-item>
			<el-form-item label="首次缓冲时间" required>
			    <el-col :span="11">
						 <el-input v-model="formLabelAlign.inputFirstBufferTime"></el-input>			
			    </el-col>
			    <el-col :span="1">
			    	<el-popover  ref="popInputType"  placement="top-start"  title="首次缓冲时间"  width="200"
				  trigger="hover" content="单位：秒。 范围：>=最小缓冲，<=9。说明：初次或者卡顿后的缓冲时间">
						</el-popover>
						 <i  v-popover:popInputType class="u-text-lightsilver">tip</i>
			    </el-col>
			</el-form-item>
			<el-form-item label="最小缓冲时间" required>
			    <el-col :span="11">
						 <el-input v-model="formLabelAlign.inputMinBufferTime"></el-input>			
			    </el-col>
			    <el-col :span="1">
			    	<el-popover  ref="popInputMinBufferTime"  placement="top-start"  title="最小缓冲时间"  width="200"
				  trigger="hover" content="单位：秒。 范围：>=0，<=9。说明：数据至少缓冲的时间，相当于整体延时的时间">
						</el-popover>
						 <i  v-popover:popInputMinBufferTime class="u-text-lightsilver">tip</i>
			    </el-col>
			</el-form-item>
		
		</el-form>
  </div>
</template>

<script>

export default {
	  name: 'setInput',
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          inputType: '',
          inputFirstBufferTime: '',
          inputMinBufferTime: '',
        }
      };
    }
  }
</script>

<style>

</style>
