import {
  Box, Typography, Card, CardContent, CardMedia, Chip, Divider, LinearProgress,
  Button, Stack, Grid, Alert
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const participants = [
  { name: 'Christiano Martins Milfont de Almeida', qty: 1 },
  { name: 'Christiano Martins Milfont de Almeida', qty: 3 },
];

const GroupBuyingCard = () => {
  const progress = (4 / 20) * 100;

  return (
    <Card sx={{ display: 'flex', p: 2, gap: 2, maxWidth: 1000 }}>
      {/* Left - Product Info */}
      <Box sx={{ width: 300 }}>
        <CardMedia
          component="img"
          height="200"
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
          alt="Tênis Esportivo Nike Air Max"
        />
        <Typography variant="h6" fontWeight="bold" mt={2}>
          Tênis Esportivo Nike Air Max
        </Typography>
        <Typography color="text.secondary" fontSize={14} mt={1}>
          Tênis esportivo com tecnologia Air Max para máximo conforto e performance. Disponível em várias cores e tamanhos.
        </Typography>

        <Box mt={2}>
          <Chip label="Moda" size="small" />
        </Box>

        <Box mt={2}>
          <Typography variant="subtitle2" fontWeight="bold">Fornecedor</Typography>
          <Typography variant="body2">Nike Brasil</Typography>
        </Box>
      </Box>

      {/* Right - Details */}
      <Box sx={{ flex: 1 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Informações do Produto
            </Typography>

            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography fontSize={14}>📦 Mín para grupo: <strong>20 unidades</strong></Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize={14}>📈 Máx disponível: <strong>200 unidades</strong></Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize={14}>🕒 Prazo de entrega: <strong>10 dias</strong></Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography fontSize={14}>🚚 Frete: <strong>Calculado no checkout</strong></Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Typography fontWeight="bold">Preços</Typography>
            <Typography fontSize={14} color="text.secondary">
              Preço normal: <s>R$ 449,99</s>
            </Typography>
            <Typography variant="h5" color="success.main" fontWeight="bold">
              R$ 329,99
            </Typography>
            <Typography fontSize={14} color="success.main">
              Economia por unidade: R$ 120,00
            </Typography>

            <Box mt={2} p={2} bgcolor="#e6f4ea" borderRadius={2}>
              <Typography fontWeight="bold">💰 Exemplo: comprando 20 unidades</Typography>
              <Typography fontSize={14}>
                Preço normal: R$ 8999,80<br />
                Preço em grupo: R$ 6599,80<br />
                <strong>Economia total: R$ 2400,00</strong>
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              <ShoppingCartIcon sx={{ mr: 1 }} />
              Grupo de Compra
            </Typography>

            <Typography fontSize={14} fontWeight="bold">
              Grupo Tênis Esportivo Nike Air Max - julho
            </Typography>
            <Typography fontSize={12} color="text.secondary" mb={1}>teste</Typography>

            <Stack direction="row" spacing={1} alignItems="center" mb={1}>
              <Chip icon={<CheckCircleIcon color="success" />} label="Ativo" size="small" />
              <AccessTimeIcon fontSize="small" color="error" />
              <Typography color="error" fontSize={12}>-1 dias restantes</Typography>
            </Stack>

            <Typography fontSize={14}>Progresso 4/20</Typography>
            <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 5, my: 1 }} />
            <Typography fontSize={12} color="text.secondary">Faltam 16 unidades para ativar o desconto</Typography>

            <Divider sx={{ my: 1 }} />
            <Typography variant="body2" fontWeight="bold" mb={1}>
              <PersonIcon fontSize="small" sx={{ mr: 1 }} />
              {participants.length} participantes
            </Typography>

            <Box>
              {participants.map((p, idx) => (
                <Typography key={idx} fontSize={14}>
                  {p.name} <strong>{p.qty} unid.</strong>
                </Typography>
              ))}
            </Box>

            <Button fullWidth variant="contained" sx={{ mt: 2 }} color="success">
              🤝 Aderir ao Grupo
            </Button>
          </CardContent>
        </Card>

        <Alert severity="warning" sx={{ mt: 2 }}>
          <strong>Atenção:</strong> Este grupo expira em <strong>30/07/2025</strong>
        </Alert>
      </Box>
    </Card>
  );
};

export default GroupBuyingCard;