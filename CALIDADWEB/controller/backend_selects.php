<?php
// Backend PHP para manejar los selects en cadena
header('Content-Type: application/json');

// Incluir la conexión a la base de datos
require_once('../models/BD.php');

try {
    // Usar la conexión PDO que ya está definida en BD.php
    $pdo = $bdc;
    
    // Verificar que la conexión sea exitosa
    if (!$pdo) {
        echo json_encode(['success' => false, 'error' => 'Error al conectar con la base de datos']);
        exit;
    }
} catch(Exception $e) {
    echo json_encode(['success' => false, 'error' => 'Error de conexión: ' . $e->getMessage()]);
    exit;
}

// Obtener la acción solicitada
$action = $_POST['action'] ?? '';

switch($action) {
    case 'get_procesos':
        getProcesos($pdo);
        break;
    
    case 'get_frecuencias':
        getFrecuencias($pdo);
        break;
    
    case 'get_detalle_material':
        getDetalleMaterial($pdo);
        break;
    
    case 'get_estados':
        getEstados($pdo);
        break;
    
    case 'get_tipos_material':
        getTiposMaterial($pdo);
        break;
    
    default:
        echo json_encode(['success' => false, 'error' => 'Acción no válida']);
        break;
}

function getProcesos($pdo) {
    try {
        $planta = $_POST['planta'] ?? '';
        
        if (empty($planta)) {
            echo json_encode(['success' => false, 'error' => 'Planta requerida']);
            return;
        }

        $stmt = $pdo->prepare("SELECT DISTINCT proceso FROM tabla_frecuencia_inspeccion WHERE planta = ? ORDER BY proceso");
        $stmt->execute([$planta]);
        $procesos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'procesos' => $procesos
        ]);
        
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'error' => 'Error: ' . $e->getMessage()]);
    }
}

function getFrecuencias($pdo) {
    try {
        $planta = $_POST['planta'] ?? '';
        $proceso = $_POST['proceso'] ?? '';
        
        if (empty($planta) || empty($proceso)) {
            echo json_encode(['success' => false, 'error' => 'Planta y proceso requeridos']);
            return;
        }

        $stmt = $pdo->prepare("SELECT DISTINCT frecuencia_inspeccion FROM tabla_frecuencia_inspeccion WHERE planta = ? AND proceso = ? ORDER BY frecuencia_inspeccion");
        $stmt->execute([$planta, $proceso]);
        $frecuencias = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'frecuencias' => $frecuencias
        ]);
        
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'error' => 'Error: ' . $e->getMessage()]);
    }
}

function getDetalleMaterial($pdo) {
    try {
        $planta = $_POST['planta'] ?? '';
        $proceso = $_POST['proceso'] ?? '';
        $frecuencia = $_POST['frecuencia_inspeccion'] ?? '';
        
        if (empty($planta) || empty($proceso) || empty($frecuencia)) {
            echo json_encode(['success' => false, 'error' => 'Todos los parámetros son requeridos']);
            return;
        }

        $stmt = $pdo->prepare("
            SELECT DISTINCT detalle_material 
            FROM tabla_frecuencia_inspeccion 
            WHERE planta = ? AND proceso = ? AND frecuencia_inspeccion = ? 
            ORDER BY detalle_material
        ");
        $stmt->execute([$planta, $proceso, $frecuencia]);
        $materiales = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'materiales' => $materiales
        ]);
        
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'error' => 'Error: ' . $e->getMessage()]);
    }
}

function getEstados($pdo) {
    try {
        $planta = $_POST['planta'] ?? '';
        $proceso = $_POST['proceso'] ?? '';
        $frecuencia = $_POST['frecuencia_inspeccion'] ?? '';
        $detalle_material = $_POST['detalle_material'] ?? '';
        
        if (empty($planta) || empty($proceso) || empty($frecuencia) || empty($detalle_material)) {
            echo json_encode(['success' => false, 'error' => 'Todos los parámetros son requeridos']);
            return;
        }

        $stmt = $pdo->prepare("
            SELECT DISTINCT estado 
            FROM tabla_frecuencia_inspeccion 
            WHERE planta = ? AND proceso = ? AND frecuencia_inspeccion = ? AND detalle_material = ? 
            ORDER BY estado
        ");
        $stmt->execute([$planta, $proceso, $frecuencia, $detalle_material]);
        $estados = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'estados' => $estados
        ]);
        
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'error' => 'Error: ' . $e->getMessage()]);
    }
}

function getTiposMaterial($pdo) {
    try {
        $planta = $_POST['planta'] ?? '';
        $proceso = $_POST['proceso'] ?? '';
        $frecuencia = $_POST['frecuencia_inspeccion'] ?? '';
        $detalle_material = $_POST['detalle_material'] ?? '';
        $estado = $_POST['estado'] ?? '';
        
        if (empty($planta) || empty($proceso) || empty($frecuencia) || empty($detalle_material) || empty($estado)) {
            echo json_encode(['success' => false, 'error' => 'Todos los parámetros son requeridos']);
            return;
        }

        $stmt = $pdo->prepare("
            SELECT DISTINCT tipo_material 
            FROM tabla_frecuencia_inspeccion 
            WHERE planta = ? AND proceso = ? AND frecuencia_inspeccion = ? AND detalle_material = ? AND estado = ? 
            ORDER BY tipo_material
        ");
        $stmt->execute([$planta, $proceso, $frecuencia, $detalle_material, $estado]);
        $tipos = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'tipos' => $tipos
        ]);
        
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'error' => 'Error: ' . $e->getMessage()]);
    }
}
?>