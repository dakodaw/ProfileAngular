
Function TransformWebConfig(){
    $MicrosoftWebXmlTransformDLL = ".\src\building\Microsoft.Web.XmlTransform.dll"
    $SourceConfig = ".\web.config"
    $Transform = ".\web.Release.config"
    
    Add-Type -LiteralPath $MicrosoftWebXmlTransformDLL
    
    $xmldoc = New-Object Microsoft.Web.XmlTransform.XmlTransformableDocument
    $xmldoc.PreserveWhitespace = $true
    $xmldoc.Load($SourceConfig)
    
    $transf = New-Object Microsoft.Web.XmlTransform.XmlTransformation($Transform)
    if ($transf.Apply($xmldoc) -eq $false)
    {
        throw 'Transformation failed.'
    }
    $TargetConfig = "./dist/dakoda-willden/web.config"
    $xmldoc.Save($TargetConfig)
}
TransformWebConfig