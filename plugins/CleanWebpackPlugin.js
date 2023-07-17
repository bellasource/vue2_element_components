/*
 * @Author: luobei luobei@seewintech.com
 * @Date: 2023-07-17 16:52:45
 * @LastEditors: luobei luobei@seewintech.com
 * @LastEditTime: 2023-07-17 17:20:55
 * @FilePath: \vue2_element_components\plugins\CleanWebpackPlugin.js
 * @Description: 自定义清空打包目录的webpack插件
 */
class CleanWebpackPlugin {
  apply(compiler) {
    // 获取打包输出的目录
    const outputPath = compiler.options.output.path;
    const fs = compiler.outputFileSystem;
    // 注册钩子：在打包输出之前 emit
    compiler.hooks.emit.tap("CleanWebpackPlugin", (compilation) => {
      // 通过fs删除打包输出的目录下的所有文件
      this.removeFiles(fs, outputPath);
    });
  }
  
  removeFiles(fs, filepath) {
    console.log('狗子被触发了')
    // 想要删除打包输出目录下所有资源，需要先将目录下的资源删除，才能删除这个目录
    // 1. 读取当前目录下所有资源
    const files = fs.readdirSync(filepath);
    // console.log(files); // [ 'images', 'index.html', 'js' ]
    // 2. 遍历一个个删除
    files.forEach((file) => {
      // 2.1 遍历所有文件，判断是文件夹还是文件
      const path = `${filepath}/${file}`;
      const fileStat = fs.statSync(path);
      // console.log(fileStat);
      if (fileStat.isDirectory()) {
        // 2.2 是文件夹，就得删除下面所有文件，才能删除文件夹
        this.removeFiles(fs, path);
      } else {
        // 2.3 是文件，直接删除
        fs.unlinkSync(path);
      }
    });
  }
}

// webpack所有钩子
class TestPlugin {
    
  constructor() {
    console.log("TestPlugin constructor()");
  }

  apply(compiler) {
    console.log("TestPlugin apply()");
    // compile hook 是 SyncHook, 也就是同步钩子, 只能用tap注册
    compiler.hooks.compile.tap("TestPlugin", (compilationParams) => {
      console.log("compiler.compile()");
    });

    // make 是 AsyncParallelHook, 也就是异步并行钩子, 特点就是异步任务同时执行
    // 可以使用 tap、tapAsync、tapPromise 注册
    // 如果使用tap注册的话，进行异步操作是不会等待异步操作执行完成的。
    compiler.hooks.make.tap("TestPlugin", (compilation) => {
      setTimeout(() => {
        console.log("compiler.make() 111");
      }, 2000);
    });

    // 使用tapAsync、tapPromise注册，进行异步操作会等异步操作做完再继续往下执行
    compiler.hooks.make.tapAsync("TestPlugin", (compilation, callback) => {
      setTimeout(() => {
        console.log("compiler.make() 222");
        // 必须调用
        callback();
      }, 1000);
    });

    compiler.hooks.make.tapPromise("TestPlugin", (compilation) => {
      console.log("compiler.make() 333");
      // 必须返回promise
      return new Promise((resolve) => {
        resolve();
      });
    });

    // emit 是异步串行钩子，特点就是异步任务顺序执行
    compiler.hooks.emit.tapAsync("TestPlugin", (compilation, callback) => {
      setTimeout(() => {
        console.log("compiler.emit() 111");
        callback();
      }, 3000);
    });
  }
}


module.exports = CleanWebpackPlugin;
