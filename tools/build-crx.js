#!/usr/bin/env node
import { readdirSync, copyFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import process from 'node:process'
import crx3 from 'crx3'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')

// TODO: 更加规范的打包流程、增加缓存清除等
async function buildCrx() {
  try {
    console.log('开始CRX3打包流程...')

    // 复制icons到extension目录
    const publicIconsDir = join(rootDir, 'public', 'icons')
    const extensionIconsDir = join(rootDir, 'extension', 'icons')

    if (!existsSync(extensionIconsDir)) {
      mkdirSync(extensionIconsDir, { recursive: true })
    }

    // 复制所有图标文件
    const iconFiles = readdirSync(publicIconsDir)
    for (const file of iconFiles) {
      const srcPath = join(publicIconsDir, file)
      const destPath = join(extensionIconsDir, file)
      copyFileSync(srcPath, destPath)
      console.log(`✓ 复制图标: ${file}`)
    }

    // 定义路径
    const extensionPath = join(rootDir, 'extension')
    const outputDir = join(rootDir, 'release')
    // 确保release目录存在
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true })
    }
    const outputPath = join(outputDir, 'extension.crx')
    const keyPath = join(rootDir, 'key.pem')
    const zipOutputPath = join(outputDir, 'extension.zip')

    console.log('正在打包CRX3文件...')

    // 使用crx3包生成CRX3文件
    await crx3([extensionPath], {
      keyPath: keyPath,
      crxPath: outputPath,
      zipPath: zipOutputPath,
    })

    console.log(`✓ CRX3打包成功: ${outputPath}`)
    console.log(`✓ ZIP打包成功: ${zipOutputPath}`)
  } catch (error) {
    console.error('✗ CRX3打包失败:', error)
    process.exit(1)
  }
}

buildCrx()
